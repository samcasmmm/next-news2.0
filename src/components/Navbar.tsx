'use client';
import React, { ReactElement, ReactNode, useState, useCallback } from 'react';
import Image from 'next/image';
import {
  MessagesSquare,
  Bell,
  User2,
  X,
  Menu,
  ChevronLeftCircle,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

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

let navLinks = [
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

const Navbar = (props: Props) => {
  const [toggleNavbar, setToggleNavbar] = useState<Boolean>(false);

  const toggleNavbarFn = useCallback(() => {
    setToggleNavbar(!toggleNavbar);
  }, [toggleNavbar]);

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      if (e.currentTarget === e.target) {
        if (toggleNavbar) {
          toggleNavbarFn();
        }
      }
    },
    [toggleNavbar, toggleNavbarFn]
  );

  return (
    <div className='flex flex-row items-center justify-between overflow-hidden'>
      <div className='container flex flex-row p-4 items-center justify-between overflow-hidden'>
        <div className='md:flex-1 lg:flex-1'>
          <Image
            src={'/images/twitter_header_photo_1.png'}
            alt='Logo'
            width={100}
            height={100}
          />
        </div>
        <div className='flex-1 lg:block hidden'>
          <ul className='flex flex-row gap-3 items-center justify-end px-4'>
            {navLinks.map((link, index) => (
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

        {/* mobile view */}
        <div className='flex lg:hidden z-10 px-4' onClick={toggleNavbarFn}>
          {toggleNavbar ? <X /> : <Menu />}
        </div>
        <div
          className={`fixed ${
            toggleNavbar ? 'right-0' : 'right-[-120%]'
          } top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-end bg-gray-900/20 transition-all duration-500 ease-in-out`}
          onClick={handleOutsideClick}
        >
          <div className='h-full w-full bg-white p-4 text-black dark:bg-dark dark:text-white md:w-2/4'>
            <div className='flex w-full flex-row items-center justify-between'>
              <button
                onClick={toggleNavbarFn}
                className='my-6 cursor-pointer text-black dark:text-white'
              >
                <ChevronLeftCircle />
              </button>
              <Image
                src='/images/twitter_header_photo_1.png'
                alt='none'
                width={50}
                height={40}
              />
            </div>
            <div className='order-3  flex w-full flex-1 flex-row items-center justify-center gap-2 md:order-none'>
              <Input
                type='text'
                className='border-slate-700 bg-white focus:ring-offset-0 focus-visible:ring-offset-0 dark:bg-dark '
              />
              <Button>Search</Button>
            </div>
            <div className='flex-1 flex items-center justify-center mt-5'>
              <ul className='flex flex-col gap-3 items-center justify-center'>
                {navLinks.map((link, index) => (
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
      </div>
    </div>
  );
};

export default Navbar;
