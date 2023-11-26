import React from 'react';

type Props = {
  jobIndex: number;
};

const JobDescription = ({ jobIndex }: Props) => {
  return (
    <div className=''>
      <p className=''>Related Jobs</p>
      <div className='flex flex-col gap-4'>{jobIndex}</div>
    </div>
  );
};

export default JobDescription;
