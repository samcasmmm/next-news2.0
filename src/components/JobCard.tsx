'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  indexNumber: number;
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

const JobCard = ({ indexNumber, setjobIndex }: Props) => {
  return (
    <motion.div
      className='w-full bg-white p-4 rounded-lg hover:border-blue-600 border cursor-pointer'
      onClick={() => setjobIndex(indexNumber)}
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
