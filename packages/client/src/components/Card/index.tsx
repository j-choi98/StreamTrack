import React from 'react';
import Divider from '../Divider';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Card({ children, title }: Props) {
  return (
    <div className="border-2 border-borderred rounded p-4">
      <div className="font-bold uppercase text-lessbrightred text-5xl md:text-6xl">
        {title}
      </div>

      <Divider className="mb-8" />

      {children}
    </div>
  );
}
