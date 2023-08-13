import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allBlogs, Blog } from 'contentlayer/generated';
import { Navigation } from '../components/nav';
import NextImage from 'next/image';

function PostCard(post: Blog) {
  return (
    <div className="mx-2 mb-8 flex gap-5 text-black">
      <div>
        <h2 className="mb-1 text-xl text-black font-bold">
          <Link href={post.url} className="hover:text-blue-900">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-black">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p>{post.body.raw.substring(0, 100)}... </p>
      </div>
      <NextImage
        src={post.image ? post.image : '/images/sydney.jpg'}
        alt={post.title}
        width={200}
        height={200}
      />
    </div>
  );
}

export default function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <Navigation />
      <div className=" pt-8 mt-12 flex h-screen flex-col">
        <section className="mx-auto max-w-xl  h-1/6 flex flex-col">
          <h1 className="text-2xl font-black">Blogs</h1>
          <p>Hello World</p>
        </section>
        <section className="bg-white w-[120%] mx-0 min-h-full -rotate-2 absolute -left-12 top-48">
          <div className="mx-auto max-w-xl pt-8 rotate-2">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
