'use client';

import { FC, HTMLAttributes } from 'react';
import cn from 'clsx';

type TProps = HTMLAttributes<HTMLSpanElement> & {
  tag?: 'span' | 'p' | 'div';
  size?: string;
  weight?: string;
  leading?: string;
  color?: string;
  className?: string;
};
const Text: FC<TProps> = ({
  className,
  color = 'white',
  size = 'base',
  tag: Component = 'span',
  leading = 'normal',
  weight = 'normal',
  children,
}) => {
  console.log(color);
  const classNames = cn({
    [`text-${color}`]: color,
    [`text-${size}`]: size,
    [`font-${weight}`]: weight,
    [`leading-${leading}`]: leading,
    className,
  });

  return <Component className={classNames}>{children}</Component>;
};

export default Text;
