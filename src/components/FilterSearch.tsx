import React from 'react';
import { Input, Button } from '@/components/';

type Props = {};

const FilterSearch = (props: Props) => {
  return (
    <div className='container mt-4'>
      <div className='flex flex-row gap-2'>
        <Input className='flex-1' placeholder='Role' />
        <Input className='flex-1' placeholder='Location' />
        <Input className='flex-1' placeholder='Job Type' />
        <Input className='flex-1' placeholder='Experience' />
        <Button className='flex-1'>Search</Button>
      </div>
    </div>
  );
};

export default FilterSearch;
