'use client';

import { Children, cloneElement, FC, isValidElement, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { textVariant2, textContainer } from '@/utils/motion';

type TProps = {
  tag?: 'motion.span' | 'motion.p' | 'motion.div';
  size?: 'xs' | 'xm' | 'md' | 'lg' | 'xl';
  weight?: 'regular' | 'semi-bold' | 'bold';
  color?: 'primary' | 'secondary' | 'primary-inverted' | 'secondary-inverted';
  className?: string;
  text: string;
};
const AnimatedText: FC<TProps> = ({ className, tag = 'motion.span', text = '' }) => {
  const motionComponents = {
    'motion.span': motion.span,
    'motion.p': motion.p,
    'motion.div': motion.div,
  };

  const Component = motionComponents[tag];

  return (
    <Component variants={textContainer} className={className}>
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Component>
  );
};

export default AnimatedText;
