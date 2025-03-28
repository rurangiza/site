import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

interface Note {
  title: string;
  date: string;
}
function PostCard(post: Post) {
  const markup = { __html: (post.body as any).html || "" };
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={markup}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a: Note, b: Note) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      {posts.filter((post, idx) => {
        if (post.published) {
          return post
        }
      }).map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
