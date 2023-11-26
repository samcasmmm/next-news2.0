'use client';

import { Button } from '@/components';
import FilterSearch from '@/components/FilterSearch';
import JobCard from '@/components/JobCard';
import JobDescription from '@/components/JobDescription';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState';
import { filterStateFn } from '@/redux/features/ui.slice';
import { useState } from 'react';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const UiState = useAppSelector((state) => state.uiState);
  const [jobIndex, setjobIndex] = useState(0);

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
            <div className='flex flex-row justify-between w-full items-center bg-white mb-4 rounded-xl'>
              <p className='p-4 my-2 font-bold'>Related Jobs</p>
              <Button
                className='p-4 my-2 cursor-pointer'
                variant={'link'}
                onClick={() => {
                  dispatch(filterStateFn(!UiState?.filterState));
                }}
              >
                {UiState?.filterState ? 'Hide Filter' : 'Show Filter'}
              </Button>
            </div>
            <div className='flex flex-col gap-4 overflow-y-scroll max-h-[60vh] scroll-smooth  scrollbar-none'>
              {Array.from({ length: 10 }).map((item, index) => (
                <JobCard
                  key={index}
                  indexNumber={index}
                  setjobIndex={setjobIndex}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col flex-1 bg-white p-4 rounded-xl'>
            <JobDescription />
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
