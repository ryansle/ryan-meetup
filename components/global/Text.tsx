// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type TextProps = {
  className?: string;
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const getVariantClasses = (size = 'md') => {
  const styles = 'tracking-wide font-medium';

  const textSize = clsx([
    size === 'lg' && 'text-xl',
    size === 'md' && 'text-lg',
    size === 'sm' && 'text-base',
    size === 'xs' && 'text-sm',
  ]);

  return clsx([styles, textSize]);
};

const Text = (props: TextProps) => {
  const { className, children, size = 'md' } = props;

  return (
    <p className={`${className} ${getVariantClasses(size)} text-gray-400`}>
      {children}
    </p>
  );
};

export { Text };