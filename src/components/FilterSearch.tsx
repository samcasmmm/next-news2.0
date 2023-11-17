import React from 'react';
import { Input, Button } from '@/components/';
import Selection from './Selection';
import { jobTypes, cities, experience } from '@/utils/Static.data';

type Props = {};

const FilterSearch = (props: Props) => {
  return (
    <div className='container mt-4'>
      <div className='flex flex-row gap-2'>
        <Input
          className='flex-1 focus-visible:ring-0 focus-visible:ring-offset-0'
          placeholder='Role'
        />
        <Selection data={jobTypes} mainLabel='Job Type' selectedLabel='Any' />
        <Selection data={cities} mainLabel='Location' selectedLabel='Any' />
        <Selection
          data={experience}
          mainLabel='experience'
          selectedLabel='Fresher'
        />
        <Button className='flex-1'>Search</Button>
      </div>
    </div>
  );
};

export default FilterSearch;
