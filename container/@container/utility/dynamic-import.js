import dynamic from 'next/dynamic';

function runPage(component) {
  return dynamic(component, {
    ssr: false,
    loading: () => <div>Loading ...</div>,
  });
}

export function dynamicImport(component) {
  const PageComponent = runPage(component);

  return () => {
    return <PageComponent />;
  };
}
