// Template https://github.com/chronark/chronark.com.git

import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { navigation_map, socials } from './lib/constants';
import { FadeInOutLine } from './components/animation/fadeInOutLine';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation_map.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <FadeInOutLine />
      <Particles className="absolute inset-0 -z-10" quantity={50} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        ArthurW404
      </h1>
      <FadeInOutLine goRight />
      <div className="my-16">
        <h2 className="text-lg text-zinc-400 text-center ">
          Hi, I&apos;m Arthur. A software engineering student from the{' '}
          <Link
            target="_blank"
            href="https://www.unsw.edu.au/"
            className="underline duration-500 hover:text-zinc-300"
          >
            University of New South Wales
          </Link>
          .
          <br />
        </h2>

        <div className="my-4 flex flow-row justify-center gap-3">
          {socials.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className="border-zinc-600 hover:border-zinc-400  relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-500 border rounded-full
               text-zinc-200 group-hover:text-white group-hover:bg-zinc-900  bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
              >
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
