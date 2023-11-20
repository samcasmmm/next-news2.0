'use client';

import FilterSearch from '@/components/FilterSearch';
import JobCard from '@/components/JobCard';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState';
import { filterStateFn } from '@/redux/features/ui.slice';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const UiState = useAppSelector((state) => state.uiState);

  return (
    <main className='w-full'>
      <div className='flex flex-col py-4 bg-white'>
        <div className='container'>
          <div className='bg-blue-600 w-full h-40 rounded-lg flex flex-row'>
            <div className='flex flex-col items-start justify-center sm:p-4 p-2 pl-6'>
              <p className='text-white font-bold sm:text-3xl text-xl'>
                Looking for a new opportunites?
              </p>
              <p className='text-white sm:text-md text-sm'>
                Browse our latest job opening
              </p>
            </div>
          </div>
        </div>
        <FilterSearch />
      </div>

      <div className='mt-5'>
        <div className='container flex flex-row gap-2 min-h-[60vh]'>
          <div className='flex flex-col flex-1 p-4 rounded-xl'>
            <div className='flex flex-row justify-between w-full bg-white'>
              <p className='py-4 pl-4 my-2 rounded-xl font-bold'>
                Related Jobs
              </p>
              <p className='py-4 pl-4 my-2 rounded-xl font-bold'>
                {UiState?.filterState ? 'Show Filter' : 'Hide Filter'}
              </p>
            </div>
            <div className='flex flex-col gap-4 overflow-y-scroll max-h-[60vh] scroll-smooth  scrollbar-none'>
              {Array.from({ length: 10 }).map((item, index) => (
                <JobCard key={index} />
              ))}
            </div>
          </div>
          <div className='flex flex-col flex-1 bg-white p-4 rounded-xl'>
            <p className=''>Related Jobs</p>
            <div className='flex flex-col gap-4'></div>
          </div>
        </div>
      </div>

      {/* <Modal
        title='Modal'
        subTitle='this is subtitle modal'
        negitiveLabel='close'
        positiveLabel='submit'
      ></Modal>
      <Button onClick={() => dispatch(openModal())}>Open Modal</Button> */}
    </main>
  );
};

export default page;
