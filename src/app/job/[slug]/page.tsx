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
  console.log(props);
  return <div>heyy {props.params.slug} </div>;
};

export default page;
