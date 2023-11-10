'use client';
import React, { useState } from 'react';
import Modal from '@/redux/features/modal/Modal';
import { closeModal, openModal } from '@/redux/features/modal/modal.slice';
import { useAppDispatch } from '@/hooks/useAppState';
import { Button } from '@/components/ui/button';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2 className='text-center text-emerald-500'>Home</h2>
      <Modal />
      <Button onClick={() => dispatch(openModal())}>Open Modal</Button>
    </main>
  );
};

export default page;
