// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <main className={`${className} py-8 px-4 flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black lg:px-48 2xl:px-96 text-white`}>
      {children}
    </main>
  );
};

export { Layout };
