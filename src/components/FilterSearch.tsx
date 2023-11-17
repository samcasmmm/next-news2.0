import React, { useState } from 'react';
import { Input, Button } from '@/components/';
import Selection from './Selection';
import { jobTypes, cities, experience } from '@/utils/Static.data';

type Props = {};

type JobSearchFilters = {
  role: string;
  jobType: string;
  location: string;
  experience: string;
};

const FilterSearch = (props: Props) => {
  const [jobSearchFilters, setJobSearchFilters] = useState<JobSearchFilters>({
    role: '',
    jobType: '',
    location: '',
    experience: '',
  });

  const handleOnChanges = (name: string, value: string) => {
    setJobSearchFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log(jobSearchFilters); // For now, log the filters to the console
  };

  return (
    <div className='container mt-4'>
      <div className='flex flex-row gap-2'>
        <Input
          className='flex-1 focus-visible:ring-0 focus-visible:ring-offset-0'
          placeholder='Role'
          onChange={(e) => handleOnChanges('role', e.target.value)}
          value={jobSearchFilters.role}
        />
        <Selection
          data={jobTypes}
          mainLabel='Job Type'
          selectedLabel='Any'
          OnChange={(value) => handleOnChanges('jobType', value)}
          nameAttri={'jobType'}
          valueAttri={jobSearchFilters.jobType}
        />
        <Selection
          data={cities}
          mainLabel='Location'
          selectedLabel='Any'
          searchable
          OnChange={(value) => handleOnChanges('location', value)}
          nameAttri={'location'}
          valueAttri={jobSearchFilters.location}
        />
        <Selection
          data={experience}
          mainLabel='Experience'
          selectedLabel='Fresher'
          OnChange={(value) => handleOnChanges('experience', value)}
          nameAttri={'experience'}
          valueAttri={jobSearchFilters.experience}
        />
        <Button className='flex-1' onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterSearch;
