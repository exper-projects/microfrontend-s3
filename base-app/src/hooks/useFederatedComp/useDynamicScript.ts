import { useEffect, useMemo, useState } from "react";

const urlsCache = new Set<string>();
console.log("useDynamicScript run");

export const useDynamicScript = (remoteUrl: string) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const dynamicRemoteUrl = useMemo(() => {
    const url = new URL(remoteUrl);
    url.searchParams.set("v", Date.now().toString()); // avoid cache
    return url.toString();
  }, [remoteUrl]);

  useEffect(() => {
    if (!remoteUrl) {
      return;
    }

    console.log("urlsCache", urlsCache);
    console.log("remoteUrl", remoteUrl);
    console.log("----------------------------");

    if (urlsCache.has(remoteUrl)) {
      setIsReady(true);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    setIsReady(false);
    setIsLoading(true);
    setHasError(false);

    const scriptElement = document.createElement("script");
    scriptElement.src = dynamicRemoteUrl;
    scriptElement.async = true;
    scriptElement.type = "text/javascript";

    scriptElement.onload = () => {
      console.log("script onload");
      console.log("urlsCache", urlsCache);
      console.log("----------------------------");
      urlsCache.add(remoteUrl);
      setIsReady(true);
      setIsLoading(false);
    };

    scriptElement.onerror = () => {
      setIsReady(false);
      setIsLoading(false);
      setHasError(true);
    };

    document.head.appendChild(scriptElement);
  }, [remoteUrl]);

  return { isReady, isLoading, hasError };
};
