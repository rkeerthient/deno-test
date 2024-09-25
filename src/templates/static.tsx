/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import "../index.css";
import {
  Template,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import { ExternalImage } from "../types/ExternalImage";
import { useState, useEffect } from "react";
import { Post } from "../types/Post";

export const config: TemplateConfig = {
  name: "turtlehead-tacos",
};

export const getPath = () => {
  return `index.html`;
};
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

const Static: Template<TemplateRenderProps> = ({ document }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/connectToDB")
      .then((response) => response.json())
      .then((json) => setPosts(json as Post[]));
  }, []);
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Posts
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Most recent posts from the blog.
                </p>
              </div>
            </div>
            <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {posts?.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Static;
