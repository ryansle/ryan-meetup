'use client';

// Utilities
import { QueryClient, QueryClientProvider } from 'react-query';

// Types
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

type ReactQueryWrapperProps = {
  children: ReactNode;
}

const ReactQueryWrapper = (props: ReactQueryWrapperProps) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryWrapper;
