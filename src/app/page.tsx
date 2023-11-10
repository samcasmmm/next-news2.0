'use client';
import React, { useState } from 'react';
import Modal from '@/redux/features/modal/Modal';
import { closeModal, openModal } from '@/redux/features/modal/modal.slice';
import { useAppDispatch } from '@/hooks/useAppState';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2 className='text-center text-emerald-500'>Home</h2>
      <Modal
        title='Modal'
        subTitle='this is subtitle modal'
        negitiveLabel='close'
        positiveLabel='submit'
      ></Modal>
      <Button onClick={() => dispatch(openModal())}>Open Modal</Button>
    </main>
  );
};

export default page;
