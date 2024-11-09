enum MfeStatus {
  INIT_SUCCESS = "init-success",
  INIT_FAILED = "init-failed",
}

const getDynamicRemoteUrl = (remoteUrl: string): string => {
  const url = new URL(remoteUrl);
  url.searchParams.set("v", Date.now().toString());
  return url.toString();
};

export const loadMfeScript = (mfeName: string, remoteUrl: string) =>
  new Promise((resolve, reject) => {
    if (window[mfeName]?.status === MfeStatus.INIT_SUCCESS) {
      resolve(`Init ${mfeName} MFE success before`);
    }

    if (window[mfeName]?.status === MfeStatus.INIT_FAILED) {
      reject(`Init ${mfeName} MFE failed before`);
    }

    (async () => {
      const onLoad = async () => {
        // Initialize the container, it may provide shared modules
        await window[mfeName].init(__webpack_share_scopes__.default);
        window[mfeName].status = MfeStatus.INIT_SUCCESS;
        resolve(`Init ${mfeName} MFE success`);
      };

      const onError = () => {
        window[mfeName].status = MfeStatus.INIT_FAILED;
        reject(`Init ${mfeName} MFE failed`);
      };

      // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
      await __webpack_init_sharing__("default");
      const existedMfeScript = document.querySelector(
        `[data-mfe="${mfeName}"]`
      ) as HTMLScriptElement;

      if (existedMfeScript) {
        // temporary for component development
        document.head.removeChild(existedMfeScript);
      }

      const initScript = document.createElement("script");
      initScript.type = "text/javascript";
      initScript.src = getDynamicRemoteUrl(remoteUrl);
      initScript.setAttribute("data-mfe", mfeName);
      initScript.async = true;
      initScript.onload = onLoad;
      initScript.onerror = onError;

      document.head.appendChild(initScript);
    })();
  });
