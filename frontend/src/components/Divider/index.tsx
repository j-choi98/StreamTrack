import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return (
    <div className={classnames('border border-indigo-700', className)}></div>
  );
};

export default Divider;
