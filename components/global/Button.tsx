// Types
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children, className, onClick, leftIcon, rightIcon } = props;

  return (
    <button
      className={`${className} rounded-lg p-3 bg-black uppercase relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2`}
      onClick={onClick}
    >
      <span className='absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400 font-semibold'>
        <div className='flex items-center justify-center'>
          {leftIcon && <span className='mr-2'>{leftIcon}</span>}
          {children}
          {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </div>
      </span>

      <span aria-hidden className='absolute inset-0 z-0 scale-x-[7] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400' />
    </button >
  );
};

export { Button };
