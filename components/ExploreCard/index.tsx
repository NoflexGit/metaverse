import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '@/constants';
import { fadeIn } from '@/utils/motion';

import AnimatedText from '@/components/AnimatedTypography/Text';
import cn from 'clsx';

type TProps = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
};

const ExploreCard: FC<TProps> = ({ id, imgUrl, title, active, handleClick, index }) => {
  const classNames = cn({
    'relative flex items-center overflow-hidden justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer':
      true,
    'lg:flex-[3.5] flex-[10]': active === id,
    'lg:flex-[0.5 flex-[2]': active !== id,
  });

  return (
    <motion.div
      onClick={() => handleClick(id)}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={classNames}
    >
      <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-3xl" />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-center w-full flex-col bg-black/50 rounded-b-3xl">
          <div className="flex justify-center items-center w-[60px] h-[60px] rounded-3xl glassmorphism mb-4">
            <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="font-normal text-base text-white uppercase">Enter the metaverse</p>
          <h3 className="font-semibold text-white text-2xl mt-7">{title}</h3>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
