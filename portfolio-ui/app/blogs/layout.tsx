import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Arthur's blogs",
  description: 'Blogs about tech and other stuff',
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={`min-h-screen ${inter.className}`}>{children}</section>;
}
