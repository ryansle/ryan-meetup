// Components
import { Header, Banner, Footer } from '@/components/navigation';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
};

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false } = props;

  return (
    <main>
      <Banner />
      <Header />
      <section className={`${className} text-white h-full flex flex-col overflow-hidden bg-gradient-to-b from-neutral-900 to-black ${fullscreen ? '' : 'py-8 px-4 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px] mb-24'}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
