'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import search from '@/public/search.svg';
import menu from '@/public/menu.svg';
import { navBarAnimationVariants } from '@/utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navBarAnimationVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute inset-0 w-[50%] gradient-01" />
    <div className="flex justify-between">
      <Image src={search} alt="" />
      <h2 className="font-extrabold text-white text-2xl">METAVERSUS</h2>
      <Image src={menu} alt="" />
    </div>
  </motion.nav>
);

export default Navbar;
