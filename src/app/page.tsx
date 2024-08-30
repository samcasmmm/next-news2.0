'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppState';
import { useState } from 'react';
import Navbar from '@/components/navber/';

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <main className='w-full'>
      <Navbar />
    </main>
  );
};

export default page;
