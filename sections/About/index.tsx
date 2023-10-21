'use client';

import { motion } from 'framer-motion';

import { staggerContainer, textVariants, slideIn, fadeIn } from '@/utils/motion';
import AnimatedText from '@/components/AnimatedTypography/Text';
const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        className="2xl:max-w-[1280px] w-full flex justify-center items-center flex-col"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <AnimatedText text="123" />
      </motion.div>
    </section>
  );
};

export default About;
