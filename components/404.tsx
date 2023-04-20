// Components
import { Heading, Text, Button } from '@/components/global';

// Types
import type { ReactNode } from 'react';

// Utilities
import { useRouter } from 'next/navigation';

type PageNotFoundProps = {
  children?: ReactNode;
}

const defaultContent = (
  <Text size='lg'>
    Maybe you meant to access one of our other pages?
  </Text>
);

const PageNotFound = (props: PageNotFoundProps) => {
  const { children } = props;

  const router = useRouter();

  return (
    <div className='flex items-center justify-center flex-col space-y-5'>
      <Heading size='3xl'>
        404
      </Heading>

      <Heading size='xl'>
        Page Not Found
      </Heading>

      {!children && defaultContent}
      {children && (
        <div>
          {children}
        </div>
      )}

      <Button onClick={() => router.push('/')}>
        Go Home
      </Button>
    </div>
  );
};

export default PageNotFound;
