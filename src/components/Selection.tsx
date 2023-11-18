'use client';
import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/classVariant';

type JobType = { label: string; value: string };

type Props = {
  mainLabel: string;
  selectedLabel?: string;
  data: JobType[];
  searchable?: boolean;
  OnChange?: (value: any) => void;
  nameAttri: any;
  valueAttri?: any;
  className?: string;
};

const Selection = ({
  mainLabel,
  nameAttri,
  valueAttri,
  selectedLabel,
  data,
  searchable = false,
  OnChange,
  className,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const containerClasses = cn(
    'w-[180px] focus:ring-0 focus:ring-offset-0',
    className
  );
  return (
    <Select
      onValueChange={(value) => OnChange && OnChange(value)}
      name={nameAttri}
      value={valueAttri}
    >
      <SelectTrigger className={containerClasses}>
        <SelectValue placeholder={mainLabel} />
      </SelectTrigger>
      <SelectContent>
        {searchable && (
          <Input
            className='mt-2'
            placeholder='Find City'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        )}
        <SelectGroup>
          <SelectLabel
            className='cursor-pointer'
            onClick={() => setSearchTerm('')}
          >
            {searchTerm != '' ? 'Clear' : selectedLabel}
          </SelectLabel>
          {filteredData?.map((item, index) => (
            <SelectItem
              className='cursor-pointer'
              key={index}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selection;
