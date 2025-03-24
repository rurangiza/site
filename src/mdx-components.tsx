import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import CodeSnippet from "@/app/components/CodeSnippet/CodeSnippet";
import Image from "@/app/components/Image/Image";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type ImageProps = ComponentPropsWithoutRef<"img">;
type HighlightProps = ComponentPropsWithoutRef<"mark">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 {...props} className="text-8xl font-black bg-grape"></h1>
  ),
  h2: (props: HeadingProps) => (
    <h2 {...props} className="text-4xl font-bold"></h2>
  ),
  h3: (props: HeadingProps) => (
    <h3 {...props} className="text-2xl font-semibold"></h3>
  ),
  h4: (props: HeadingProps) => (
    <h4 {...props} className="text-lg font-medium"></h4>
  ),
  h5: (props: HeadingProps) => (
    <h5 {...props} className="text-sm font-medium"></h5>
  ),
  h6: (props: HeadingProps) => (
    <h6 {...props} className="text-sm font-normal text-gray-500"></h6>
  ),
  p: (props: ParagraphProps) => (
    <p className=" text-gray-800 dark:text-zinc-300 leading-snug" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"code">) => (
    <CodeSnippet className={className} {...props}>
      {children}
    </CodeSnippet>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
  img: (props: ImageProps) => <Image {...props} />,
  hr:  () => <hr className="w-48 m-auto h-0.5 text-gray-300 my-8" />,
  mark: (props: HighlightProps) => <mark {...props} className="bg-[#ffff75b8]"></mark>,
  selection: (props: HighlightProps) => <mark {...props} style={{backgroundColor: "yellow",}}></mark>,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
