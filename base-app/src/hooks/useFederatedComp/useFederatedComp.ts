import { ComponentType, lazy, useEffect, useState } from "react";

import { useDynamicScript } from "./useDynamicScript";

type UseFederationCompArgs = {
  remoteUrl: string;
  scope: string;
  module: string;
};

const loadComponent = (scope: string, module: string) => {
  return async () => {
    // @ts-ignore
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope];
    // @ts-ignore
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

export const useFederatedComp = <CompType>({
  remoteUrl,
  scope,
  module,
}: UseFederationCompArgs) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = useState<ComponentType<CompType> | null>();

  useEffect(() => {
    if (Component) {
      setComponent(null); // Only recalculate when key changes
    }
  }, [key]);

  const {
    isReady: isScriptReady,
    isLoading: isScriptLoading,
    hasError: hasScriptError,
  } = useDynamicScript(remoteUrl);

  useEffect(() => {
    if (hasScriptError) {
      setComponent(null);
      throw new Error(`Failed to load the ${key}`);
    }
  }, [hasScriptError, key]);

  useEffect(() => {
    if (isScriptReady) {
      const component = lazy(loadComponent(scope, module));
      setComponent(component);
    }
  }, [isScriptReady, module, scope]);

  return {
    isScriptLoading,
    hasScriptError,
    Component,
  };
};
