import React from 'react';
import classnames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={classnames(
        'container mx-auto my-auto text-center font-poppins',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
