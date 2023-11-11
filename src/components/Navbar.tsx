'use client';
import React, { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import { MessagesSquare, Bell, User2 } from 'lucide-react';
import Link from 'next/link';

type Props = {};
interface HoverableProps {
  children: ReactNode | string;
  path: string;
  underLine: boolean;
}

const Hoverable = ({ children, path, underLine }: HoverableProps) => {
  return (
    <li className='group cursor-pointer hover:text-blue-600 transition ease-in-out duration-200'>
      <Link href={path}>
        {children}
        {underLine && (
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-200'></span>
        )}
      </Link>
    </li>
  );
};

let middleLinks = [
  {
    label: 'Find Job',
    path: '/',
    underLine: true,
  },
  {
    label: 'Company Review',
    path: '/',
    underLine: true,
  },
  {
    label: 'Salary Guide',
    path: '/',
    underLine: true,
  },
];
let rightLinks = [
  { icon: <MessagesSquare />, text: 'Messages', path: '/', underLine: false },
  { icon: <Bell />, text: 'Bell', path: '/', underLine: false },
  { icon: <User2 />, text: 'User', path: '/', underLine: false },
  { text: 'Employers/Post Job', path: '/', underLine: true },
];

const Navbar = (props: Props) => {
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
            <Hoverable path={link.path} key={index} underLine={link.underLine}>
              {link.label}
            </Hoverable>
          ))}
        </ul>
      </div>
      <div className='flex-1'>
        <ul className='flex flex-row justify-end gap-3 mr-4'>
          {rightLinks.map((link, index) => (
            <Hoverable key={index} path={link.path} underLine={link.underLine}>
              {link.icon ? link.icon : link.text}
            </Hoverable>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
