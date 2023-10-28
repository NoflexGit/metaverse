'use client';

import { motion } from 'framer-motion';

import { staggerContainer, textVariants, slideIn } from '@/utils/motion';
const Hero = () => (
  <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer(1, 7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex flex-col"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariants(1.1)} className="hero-heading">
          Metaverse
        </motion.h1>
        <motion.div variants={textVariants(1.2)}>
          <h1 className="hero-heading flex flex-row justify-center items-center">
            Ma
            <div className="hero-d-text" />
            ness
          </h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="hero-gradient absolute w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px]" />
        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
