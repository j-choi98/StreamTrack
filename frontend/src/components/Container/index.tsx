import React from 'react';
import classnames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={classnames('container mx-auto', className)}>
      {children}
    </div>
  );
};

export default Container;
