'use client';
import React, { useState } from 'react';
import Modal from '@/redux/features/modal/Modal';
import { closeModal, openModal } from '@/redux/features/modal/modal.slice';
import { useAppDispatch } from '@/hooks/useAppState';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FilterSearch from '@/components/FilterSearch';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <main className='flex flex-col py-4 bg-white'>
      <div className='container'>
        <div className='bg-blue-600 w-full h-40 rounded-lg md:flex flex-row hidden'>
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
