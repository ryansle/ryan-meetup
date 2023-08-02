import { Header } from './Header';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  homePage?: boolean;
};

const Layout = (props: LayoutProps) => {
  const { className, children, homePage = false } = props;

  return (
    <main>
      <Header />
      {/* <section className={`${className} text-white h-full py-8 px-4 flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black lg:px-48 ${homePage ? 'xl:px-72' : 'xl:px-96'} 3xl:px-[400px] 4xl:px-[650px]`}> */}
      <section className={`${className} text-white h-full py-8 px-4 flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]`}>
        {children}
      </section>
    </main>
  );
};

export { Layout };
