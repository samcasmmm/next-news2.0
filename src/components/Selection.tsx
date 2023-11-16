import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type JobType = { label: string; value: string };

type Props = {
  mainLabel: string;
  selectedLabel?: string;
  data: JobType[];
};

const Selection = ({ mainLabel, selectedLabel, data }: Props) => {
  return (
    <Select>
      <SelectTrigger className='w-[180px] focus:ring-0 focus:ring-offset-0'>
        <SelectValue placeholder={mainLabel} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectedLabel}</SelectLabel>
          {data?.map((item, index) => (
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
