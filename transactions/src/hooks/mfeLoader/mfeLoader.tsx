import { FC, lazy, ReactNode, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { loadMfeComponent } from "./loadMfeComponent";

interface IMfeLoaderProps {
  remoteUrl: string;
  mfeName: string;
  moduleName?: string;
  errorElement?: ReactNode;
  loadingElement?: ReactNode;
}

const defaultError = <div>Ops! Something went wrong</div>;
const defaultLoading = <div>Loading...</div>;

export const mfeLoader = <CompType,>({
  remoteUrl,
  mfeName,
  moduleName = "./App",
  errorElement,
  loadingElement,
}: IMfeLoaderProps) => {
  const Component = lazy(
    loadMfeComponent({
      remoteUrl,
      mfeName,
      moduleName,
    })
  );

  const BuiltComponent: FC<CompType> = (props) => {
    return (
      <ErrorBoundary
        fallbackRender={(error) => {
          console.error("mfeLoader Error", error);
          return errorElement || defaultError;
        }}
      >
        <Suspense fallback={loadingElement || defaultLoading}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };

  return BuiltComponent;
};
