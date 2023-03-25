// Types
import type { ReactNode } from 'react';

type HeadingProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  children: ReactNode;
};

const Heading = (props: HeadingProps) => {
  const { size = 'lg', className, children } = props;

  const styles = 'tracking-wider font-bold';

  const renderHeading = () => {
    switch (size) {
      case '2xl':
        return <h1 className={`${styles} text-7xl`}>{children}</h1>;
      case 'xl':
        return <h1 className={`${styles} text-5xl`}>{children}</h1>;
      case 'lg':
        return <h2 className={`${styles} text-4xl`}>{children}</h2>;
      case 'md':
        return <h3 className={`${styles} text-3xl`}>{children}</h3>;
      default:
        return <h4 className={`${styles} text-2xl`}>{children}</h4>;

    }
  };

  return (
    <div className={className}>
      {renderHeading()}
    </div>
  );
};

export { Heading };
