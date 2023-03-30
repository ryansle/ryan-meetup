// Components
// import { Disclosure, Transition } from '@headlessui/react';
import { Heading } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

type FAQProps = {
  data: FrequentlyAskedQuestion[];
  isLoading: boolean;
};

const FAQ = (props: FAQProps) => {
  const { data, isLoading } = props;

  return (
    <div>
      <Heading className='mb-4'>Frequently Asked Questions</Heading>

      {/* TODO: use disclosure component */}
      <div>
        {isLoading && (
          <>
            {Array(5).fill('').map((_, index) => (
              <div key={index} className='mb-10'>
                <div className='h-4 bg-gray-700 rounded-full w-48 mb-4 animate-pulse' />
                <div className='h-3 bg-gray-700 rounded-full max-w-[360px] mb-2.5 animate-pulse' />
              </div>
            ))}
          </>
        )}

        {!isLoading && data && data?.map((pair, index) => (
          <div key={index}>
            <>
              <div className='text-xl font-semibold tracking-wider mb-2'>
                {pair.question}
              </div>
              <div className='text-lg mb-10'>
                {pair.answer}
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQ };