import React from 'react';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';
import CountryDropdown from '../CountryDropdown';
import LanguagesDropdown from '../LanguageDropdown';

type Props = {};

const navLinks = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Find Job', path: '/find-job' },
  { id: 3, label: 'Employes', path: '/employes' },
  { id: 4, label: 'Candidates', path: '/candidates' },
  { id: 5, label: 'Pricing Plans', path: '/pricing' },
  { id: 6, label: 'Customer Supports', path: '/support' },
];

const Header = (props: Props) => {
  return (
    <div className='bg-[#F1F2F4] flex items-center justify-center'>
      <div className='flex items-center justify-between w-full 2xl:w-4/6 p-2'>
        <ul className='flex items-center justify-center gap-4 flex-row'>
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className='text-[14px] opacity-70 hover:opacity-100 hover:duration-150 hover:ease-linear'
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className='flex items-center justify-center gap-3 flex-row'>
          <div className='flex items-center justify-center gap-2 opacity-70 hover:opacity-100 hover:duration-150 hover:ease-linear hover:cursor-pointer'>
            <PhoneCall className='text-[14px]' />
            <p className='text-[14px]'>0264-669871</p>
          </div>
          <LanguagesDropdown lang={'US'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
