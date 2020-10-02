import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return (
    <div className={classnames('border border-borderred', className)}></div>
  );
};

export default Divider;
