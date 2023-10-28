'use client';

import { motion } from 'framer-motion';

import { staggerContainer, textVariants, slideIn, fadeIn } from '@/utils/motion';
import AnimatedText from '@/components/AnimatedTypography/Text';
import Typography from '@/components/Typography';
const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 mt-10">
      <div className="gradient-05 z-0" />
      <motion.div
        className="2xl:max-w-[1280px] w-full flex justify-center items-center flex-col"
        variants={staggerContainer(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <AnimatedText text="| About Metaverus" className="text-[#c7c7c7] text-sm" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-[#c7c7c7]"
        >
          <b className="text-white">Metaverse</b> is a new thing in the future, where you can enjoy
          the virtual world by feeling like it's really real, you can feel what you feel in this
          metaverse world, because this is really the{' '}
          <b className="text-white">madness of the metaverse</b> of today, using only{' '}
          <b className="text-white">VR</b> devices you can easily explore the metaverse world you
          want, turn your dreams into reality. Let's <b className="text-white">explore</b> the
          madness of the metaverse by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          alt="arrow-down"
          src="/arrow-down.svg"
          className="mt-7 h-7 w-[18px] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default About;
