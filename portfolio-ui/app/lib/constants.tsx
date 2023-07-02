import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export const navigation_map: Array<{ name: string; href: string }> = [
  // { name: "Projects", href: "/projects" },
  { name: 'Contact', href: '/contact' },
];

export const socials = [
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/arthurw404/',
    label: 'LinkedIn ',
    handle: 'Arthur Wang',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:arthurw404@gmail.com',
    label: 'Email',
    handle: 'arthurw404@gmail.com',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/ArthurW404',
    label: 'Github',
    handle: 'ArthurW404',
  },
];
