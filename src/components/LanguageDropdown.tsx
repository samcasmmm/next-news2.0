'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  lang?: 'US' | 'IN' | 'JP' | 'KR' | 'RU';
};

type CountryLang = {
  id?: Number;
  name?: string;
  country?: string;
  code?: string;
  flag?: string;
};

const LanguagesDropdown = (props: Props) => {
  const [selectedLang, setSelectedLang] = useState<CountryLang | null>(null);

  let data = [
    {
      id: 1,
      name: 'English',
      code: 'US',
      country: 'United States',
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    },
    {
      id: 2,
      name: 'English',
      country: 'India',
      code: 'IN',
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      id: 3,
      name: 'Japanese',
      country: 'Japan',
      code: 'JP',
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
    },
    {
      id: 4,
      name: 'Korean',
      country: 'South Korea',
      code: 'KR',
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
    },
    {
      id: 5,
      name: 'Russian',
      country: 'Russia',
      code: 'RU',
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg',
    },
  ];

  useEffect(() => {
    if (data) {
      const india = data.find((lang: CountryLang) => lang.code === props.lang);
      if (india) {
        setSelectedLang(india);
      }
    }
  }, [props.lang]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center justify-center gap-2 opacity-100 hover:opacity-100 hover:duration-150 hover:ease-linear hover:cursor-pointer'>
        {selectedLang && (
          <>
            {selectedLang.flag && (
              <Image
                src={selectedLang.flag}
                width={20}
                height={20}
                alt={selectedLang.name || 'Country flag'}
              />
            )}
            <span className=''>{selectedLang.name}</span>
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${data.length < 10 ? 'h-auto' : 'h-80'} overflow-auto`}
      >
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        {data.map((lang: CountryLang, index: number) => (
          <DropdownMenuItem
            key={index}
            onClick={() => {
              setSelectedLang(lang);
            }}
          >
            {lang.flag && (
              <Image
                src={lang.flag}
                width={20}
                height={20}
                alt={lang.name || 'Country flag'}
              />
            )}
            <span className='ml-2'>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguagesDropdown;
