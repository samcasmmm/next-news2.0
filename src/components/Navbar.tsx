'use client';
import React, { ReactElement, ReactNode, useState, useCallback } from 'react';
import Image from 'next/image';
import { MessagesSquare, Bell, User2, X, Menu } from 'lucide-react';
import Link from 'next/link';

type Props = {};
interface HoverableProps {
  children: ReactNode | string;
  path: string;
  underLine: boolean;
}

const Hoverable = ({ children, path, underLine }: HoverableProps) => {
  return (
    <li className='group cursor-pointer hover:text-blue-600 transition ease-in-out duration-200 font-medium'>
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
  const [toggleNavbar, setToggleNavbar] = useState<Boolean>(false);

  const toggleNavbarFn = useCallback(() => {
    setToggleNavbar(!toggleNavbar);
  }, [toggleNavbar]);

  return (
    <div className='flex flex-row p-4 justify-between'>
      <div className='md:flex-[0.7] lg:flex-1'>
        <Image
          src={'/images/twitter_header_photo_1.png'}
          alt='Logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex-1 lg:block hidden'>
        <ul className='flex flex-row gap-3 items-center justify-center'>
          {middleLinks.map((link, index) => (
            <Hoverable path={link.path} key={index} underLine={link.underLine}>
              {link.label}
            </Hoverable>
          ))}
        </ul>
      </div>
      <div className='flex-1 lg:block hidden '>
        <ul className='flex flex-row justify-end gap-3 mr-4'>
          {rightLinks.map((link, index) => (
            <Hoverable key={index} path={link.path} underLine={link.underLine}>
              {link.icon ? link.icon : link.text}
            </Hoverable>
          ))}
        </ul>
      </div>

      {/* mobile view */}
      <div className='flex lg:hidden z-10' onClick={toggleNavbarFn}>
        {toggleNavbar ? <X /> : <Menu />}
      </div>
      <div
        className={`flex flex-col items-center justify-center lg:hidden absolute bg-red-600 h-screen w-[40%] top-0 ${
          toggleNavbar ? 'right-0' : 'right-[-100%]'
        } transition-all duration-200 ease-in-out`}
      >
        <div className='flex-1 flex items-center justify-center '>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            {middleLinks.map((link, index) => (
              <Hoverable
                path={link.path}
                key={index}
                underLine={link.underLine}
              >
                {link.label}
              </Hoverable>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
