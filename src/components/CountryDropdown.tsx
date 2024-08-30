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
  code?: String;
};

type CountryType = {
  name?: string;
  code?: string;
  emoji?: string;
  unicode?: string;
  image?: string;
};

const fetchCountryData = async () => {
  const response = await axios.get(
    'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json'
  );
  return response.data;
};

const CountryDropdown = (props: Props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['countryList'],
    queryFn: fetchCountryData,
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  );

  useEffect(() => {
    if (data) {
      const india = data.find(
        (country: CountryType) => country.code === props.code
      );
      if (india) {
        setSelectedCountry(india);
      }
    }
  }, [data]);

  if (isLoading) return <div className='text-xs opacity-70'>Loading...</div>;

  if (error)
    return (
      <div className='text-xs opacity-70'>
        An error occurred: {error.message}
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center justify-center gap-2 opacity-100 hover:opacity-100 hover:duration-150 hover:ease-linear hover:cursor-pointer'>
        {selectedCountry && (
          <>
            {selectedCountry.image && (
              <Image
                src={selectedCountry.image}
                width={20}
                height={20}
                alt={selectedCountry.name || 'Country flag'}
              />
            )}
            <span className=''>{selectedCountry.name}</span>
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='h-80 overflow-auto'>
        <DropdownMenuLabel>Select Country</DropdownMenuLabel>
        {data.map((country: CountryType, index: number) => (
          <DropdownMenuItem
            key={index}
            onClick={() => {
              setSelectedCountry(country);
            }}
          >
            {country.image && (
              <Image
                src={country.image}
                width={20}
                height={20}
                alt={country.name || 'Country flag'}
              />
            )}
            <span className='ml-2'>{country.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountryDropdown;
