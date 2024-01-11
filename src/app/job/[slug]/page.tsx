'use client';

import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  params: {
    slug: number;
  };
  searchParams: {};
};

const page = (props: Props) => {
  const SLUG = props?.params?.slug;
  return <div className='container'>
    <div className="">
      <div className="text-md">Heading</div>
      <div className="">
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  </div>;
};

export default page;
