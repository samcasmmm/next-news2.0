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
  return <div>heyy {SLUG} </div>;
};

export default page;
