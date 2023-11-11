'use client';
import React, { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import { MessagesSquare, Bell, User2 } from 'lucide-react';
import Link from 'next/link';

type Props = {};
interface HoverableProps {
  children: ReactNode | string;
  path: string;
}

const Hoverable = ({ children, path }: HoverableProps) => {
  return (
    <li className='cursor-pointer hover:text-emerald-500 transition ease-in-out duration-200 '>
      <Link href={path}>{children}</Link>
    </li>
  );
};

const Navbar = (props: Props) => {
  let middleLinks = [
    {
      label: 'Find Job',
      path: '/',
    },
    {
      label: 'Company Review',
      path: '/',
    },
    {
      label: 'Salary Guide',
      path: '/',
    },
  ];
  let rightLinks = [
    { icon: <MessagesSquare />, text: 'Messages', path: '/messages' },
    { icon: <Bell />, text: 'Bell', path: '/bell' },
    { icon: <User2 />, text: 'User', path: '/user' },
    { text: 'Employers/Post Job', path: '/employers' },
  ];

  return (
    <div className='flex flex-row p-4'>
      <div className='flex-1'>
        <Image
          src={'/images/twitter_header_photo_1.png'}
          alt='Logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex-1'>
        <ul className='flex flex-row gap-3 '>
          {middleLinks.map((link, index) => (
            <Hoverable path={link.path} key={index}>
              {link.label}
            </Hoverable>
          ))}
        </ul>
      </div>
      <div className='flex-1'>
        <ul className='flex flex-row justify-end gap-3 mr-4'>
          {rightLinks.map((item, index) => (
            <Hoverable key={index} path={item.path}>
              {item.icon ? item.icon : item.text}
            </Hoverable>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
