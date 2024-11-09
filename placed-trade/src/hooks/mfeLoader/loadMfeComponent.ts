import { loadMfeScript } from "./loadMfeScript";

interface ILoadMfeComponentProps {
  remoteUrl: string;
  mfeName: string;
  moduleName: string;
}

export const loadMfeComponent = ({
  remoteUrl,
  mfeName,
  moduleName,
}: ILoadMfeComponentProps) => {
  return async () => {
    await loadMfeScript(mfeName, remoteUrl);
    const factory = await window[mfeName].get(moduleName);
    const Component = factory();
    return Component;
  };
};
