import React, { useState } from 'react';
import { Input, Button } from '@/components/';
import Selection from './Selection';
import { jobTypes, cities, experience } from '@/utils/Static.data';
import { Search } from 'lucide-react';

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
      <div className='flex flex-col sm:flex-row gap-2 flex-wrap'>
        <Input
          parentClassName='flex-1 '
          className='focus-visible:ring-0 focus-visible:ring-offset-0 '
          placeholder='Role'
          onChange={(e) => handleOnChanges('role', e.target.value)}
          value={jobSearchFilters.role}
          icon={<Search size={18} color='#20202060' />}
        />
        <Selection
          className='flex-1 w-full'
          data={jobTypes}
          mainLabel='Job Type'
          selectedLabel='Any'
          OnChange={(value) => handleOnChanges('jobType', value)}
          nameAttri={'jobType'}
          valueAttri={jobSearchFilters.jobType}
        />
        <Selection
          className='flex-1 w-full'
          data={cities}
          mainLabel='Location'
          selectedLabel='Any'
          searchable
          OnChange={(value) => handleOnChanges('location', value)}
          nameAttri={'location'}
          valueAttri={jobSearchFilters.location}
        />
        <Selection
          className='flex-1 w-full'
          data={experience}
          mainLabel='Experience'
          selectedLabel='Fresher'
          OnChange={(value) => handleOnChanges('experience', value)}
          nameAttri={'experience'}
          valueAttri={jobSearchFilters.experience}
        />
        <Button className='flex-1 w-full' onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterSearch;
