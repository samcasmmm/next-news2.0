'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import useWindowWidth from '@/hooks/useWindowWidth';
import { useRouter } from 'next/navigation';

type Props = {
  indexNumber: number;
  jobIndex: number;
  setjobIndex: React.Dispatch<React.SetStateAction<number>>;
};
const technologies = [
  'Html',
  'CSS',
  'JavaScript',
  'NodeJS',
  'ReactJS',
  'MongoDB',
  'ExpressJS',
];

const JobCard = ({ indexNumber, jobIndex, setjobIndex }: Props) => {
  const WIDTH = useWindowWidth();
  const router = useRouter();

  const handleJobDescriptions = () => {
    setjobIndex(indexNumber);
    if (WIDTH <= 767) {
      router.push(`/job/slug=${indexNumber}`);
    }
  };
  return (
    <motion.div
      className={`w-full bg-white p-4 rounded-lg hover:border-blue-600 border cursor-pointer ${
        jobIndex === indexNumber ? 'border-blue-600' : ''
      }`}
      onClick={handleJobDescriptions}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src={'https://placehold.co/50x50/png'}
            alt='Logo'
            width={50}
            height={50}
          />
          <div className='flex flex-col gap-1'>
            <p className=''>Role/Position {WIDTH}</p>
            <p className='text-xs'>Company Name</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fugit at vitae? Ut, sequi cumque.
          </p>
          <div className='flex flex-row gap-2 flex-wrap'>
            {technologies.map((item, index) => (
              <p className='bg-gray-100 p-2 text-xs rounded-md' key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
