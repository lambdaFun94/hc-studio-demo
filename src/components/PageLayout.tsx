import * as React from "react";
import "../index.css";
import Img, { Image } from "./Img";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: Image;
};

const PageLayout = ({ title, children, subtitle, image }: Props) => {
  return (
    <div className="py-12 max-w-screen-lg px-4 mx-auto">
      <div className="flex gap-4">
        {image && <Img image={image} width={300} layout="fixed" />}
        <div>
          <div className="text-4xl font-medium mb-4">{title}</div>
          {subtitle && <div className="text-gray-700 mb-4">{subtitle}</div>}
        </div>
      </div>
      <div className="flex flex-col gap-8 my-8">{children}</div>
    </div>
  );
};

export default PageLayout;
