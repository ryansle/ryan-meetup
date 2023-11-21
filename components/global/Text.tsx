// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type TextProps = {
  className?: string;
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'black' | 'white' | 'primary' | 'secondary';
}

const getVariantClasses = (size = 'md', color: string) => {
  const styles = 'tracking-wide font-medium';

  const textSize = clsx([
    size === 'lg' && 'text-xl',
    size === 'md' && 'text-lg',
    size === 'sm' && 'text-base',
    size === 'xs' && 'text-sm',
  ]);

  const fontColor = clsx([
    color === 'black' && 'text-black',
    color === 'white' && 'text-white',
    color === 'primary' && 'text-gray-700',
    color === 'secondary' && 'text-gray-400',
  ]);

  return clsx([styles, textSize, fontColor]);
};

const Text = (props: TextProps) => {
  const {
    className,
    children,
    size = 'md',
    color = 'secondary'
  } = props;

  return (
    <p className={`${className} ${getVariantClasses(size, color)}`}>
      {children}
    </p>
  );
};

export { Text };