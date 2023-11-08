'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/hooks/useAppState';
import {
  increment,
  decrement,
  incrementByAmount,
} from '@/redux/slices/counter.slice';
import { Button } from '@/components/ui/button';

type Props = {};

const Home = (props: Props) => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className='text-xl'>Counter : {count}</h3>
      <div className='flex flex-row gap-3'>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(3))}>
          Increment By Amount
        </Button>
      </div>
    </div>
  );
};

export default Home;
