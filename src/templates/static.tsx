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
import { useState, useEffect } from "react";

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
  const [isConnected, setIsConnected] = useState<boolean>();

  useEffect(() => {
    fetch("/api/connectToDB")
      .then((response) => response.json())
      .then((json) => setIsConnected(true));
  }, []);
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-between">
              <div>
                {isConnected ? (
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Connected Succesfully
                  </h2>
                ) : (
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Not Connected
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Static;
