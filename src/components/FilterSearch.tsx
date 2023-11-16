import React from 'react';
import { Input, Button } from '@/components/';
import Selection from './Selection';

type Props = {};

const jobTypes = [
  { label: 'Full-time', value: 'Full-time' },
  { label: 'Remote', value: 'Remote' },
  { label: 'Part-time', value: 'Part-time' },
  { label: 'Freelance', value: 'Freelance' },
  { label: 'Contract', value: 'Contract' },
  { label: 'Temporary', value: 'Temporary' },
  { label: 'Internship', value: 'Internship' },
  { label: 'Flexible Schedule', value: 'Flexible Schedule' },
];

const FilterSearch = (props: Props) => {
  return (
    <div className='container mt-4'>
      <div className='flex flex-row gap-2'>
        <Input
          className='flex-1 focus-visible:ring-0 focus-visible:ring-offset-0'
          placeholder='Role'
        />
        <Input
          className='flex-1 focus-visible:ring-0 focus-visible:ring-offset-0'
          placeholder='Location'
        />
        {/* <Input className='flex-1' placeholder='Job Type' /> */}
        <Selection data={jobTypes} mainLabel='Job Type' selectedLabel='Any' />
        <Input className='flex-1' placeholder='Experience' />
        <Button className='flex-1'>Search</Button>
      </div>
    </div>
  );
};

export default FilterSearch;
