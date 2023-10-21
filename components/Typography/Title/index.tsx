'use client';

import { FC, HTMLAttributes } from 'react';

type TProps = HTMLAttributes<HTMLSpanElement> & {
  tag?: 'span' | 'p' | 'div';
  size?: 'xs' | 'xm' | 'md' | 'lg' | 'xl';
  weight?: 'regular' | 'semi-bold' | 'bold';
  color?: 'primary' | 'secondary';
  className?: string;
};
const Title: FC<TProps> = ({ className, tag: Component = 'span', children }) => {
  return <Component className={className}>{children}</Component>;
};

export default Title;
