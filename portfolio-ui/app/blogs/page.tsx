import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allBlogs, Blog } from 'contentlayer/generated';
import { Navigation } from '../components/nav';
import NextImage from 'next/image';

function PostCard(post: Blog) {
  console.log(post.body.raw);
  return (
    <div className="mx-2 mb-8 flex gap-5">
      <NextImage
        src={post.image ? post.image : '/images/sydney.jpg'}
        alt={post.title}
        width={200}
        height={200}
      />
      <div>
        <h2 className="mb-1 text-xl">
          <Link href={post.url} className="text-white hover:text-blue-900">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-200">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p>{post.body.raw.substring(0, 100)}... </p>
      </div>
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
      <div className=" mx-auto max-w-xl py-8 mt-12">
        <h1 className="mb-8 text-center text-2xl font-black">Blogs</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
