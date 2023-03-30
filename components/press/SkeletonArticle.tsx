const SkeletonArticle = () => {
  return (
    <div>
      <div className='grid grid-cols-3 flex space-x-3'>
        <div className='col-span-3 sm:col-span-1'>
          <div
            className='animate-pulse bg-gray-700 rounded-lg w-full h-full aspect-w-2 aspect-h-1'
          />
        </div>
        <div className='col-span-3 mt-2 sm:mt-0 sm:col-span-2 space-y-4'>
          <div className='animate-pulse bg-gray-700 h-4 rounded-full w-24 mb-1' />
          <div className='animate-pulse bg-gray-700 h-10 rounded-lg w-40==60 sm:w-96' />

          <div className='animate-pulse bg-gray-700 h-4 rounded-full w-24 mb-1' />
          <div className='animate-pulse bg-gray-700 h-4 rounded-full w-60 mb-1' />
        </div>
      </div>
    </div>
  );
};

export { SkeletonArticle };