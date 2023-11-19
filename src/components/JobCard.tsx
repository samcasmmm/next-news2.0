'use client';
import Image from 'next/image';

type Props = {};

const JobCard = (props: Props) => {
  return (
    <div className='w-full h-40 bg-white p-4 rounded-lg'>
      <div className='flex flex-row items-center gap-4'>
        <Image
          src={'https://placehold.co/50x50/png'}
          alt='Logo'
          width={50}
          height={50}
          blurDataURL=''
        />
        <div className='flex flex-col gap-1'>
          <p className=''>Role/Position</p>
          <p className='text-xs'>Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
