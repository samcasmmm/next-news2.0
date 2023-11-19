'use client';
import Image from 'next/image';

type Props = {};

const JobCard = (props: Props) => {
  return (
    <div className='w-full bg-white p-4 rounded-lg'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src={'https://placehold.co/50x50/png'}
            alt='Logo'
            width={50}
            height={50}
          />
          <div className='flex flex-col gap-1'>
            <p className=''>Role/Position</p>
            <p className='text-xs'>Company Name</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fugit at vitae? Ut, sequi cumque.
          </p>
          <div className='flex flex-row gap-2 flex-wrap'>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>Html</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>CSS</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>JavaScript</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>NodeJS</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>ReactJS</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>MongoDB</p>
            <p className='bg-gray-100 p-2 text-xs rounded-md'>ExpressJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
