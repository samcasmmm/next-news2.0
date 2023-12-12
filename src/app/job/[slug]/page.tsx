'use client';

import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  const router = useRouter();

  console.log(router);
  return <div>heyy </div>;
};

export default page;
