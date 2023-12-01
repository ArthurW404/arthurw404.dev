'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';

import { navigation_map } from '../lib/constants';

export const Navigation: React.FC<{ blackText?: boolean, progressBar?: boolean  }> = ({
  blackText = false,
  progressBar = false
}) => {
  const { scrollY, scrollYProgress } = useScroll({});
  const [bg, setBg] = useState('');
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollLimit = 80;
    if (bg === '' && latest > scrollLimit) {
      setBg('bg-purple-900');
    } else if (bg !== '' && latest <= scrollLimit) {
      setBg('');
    }
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header>
      <motion.div className={`fixed inset-x-0 top-0 z-50  duration-200 ${bg}`}>
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation_map.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`duration-200 ${
                  bg === '' && blackText ? 'text-zinc-800' : 'text-zinc-300'
                } hover:text-zinc-100`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className={`duration-200 ${
              bg === '' && blackText ? 'text-zinc-800' : 'text-zinc-300'
            } hover:text-zinc-100`}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
        {progressBar && bg !== '' && (
          <motion.div className="h-2 bg-red-500" style={{ scaleX }} />
        )}
      </motion.div>
    </header>
  );
};
