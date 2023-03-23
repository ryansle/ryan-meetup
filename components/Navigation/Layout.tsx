// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { className, children } = props;

  return (
    <main className={`${className} py-4 flex min-h-screen max-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-900 to-black lg:px-48 2xl:px-96`}>
      {children}
    </main>
  );
};

export { Layout };
