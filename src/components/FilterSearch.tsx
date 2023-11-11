import React from 'react';
import { Input } from './ui/input';

type Props = {};

const FilterSearch = (props: Props) => {
  return (
    <div className='container mt-4'>
      <div className='flex flex-row gap-2'>
        <Input />
        <Input />
        <Input />
        <Input />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default FilterSearch;
