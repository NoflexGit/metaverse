'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '@/constants';
import { staggerContainer, textVariant2 } from '@/utils/motion';
import AnimatedText from '@/components/AnimatedTypography/Text';
import ExploreCard from '@/components/ExploreCard';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full flex flex-col mx-auto"
      >
        <AnimatedText text="| The World" className="text-[#c7c7c7] text-sm text-center" />
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="md:text-[4rem] text-[2.5rem] text-white text-center font-bold"
        >
          Choose the world you want <br /> to explore
        </motion.h2>
        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
