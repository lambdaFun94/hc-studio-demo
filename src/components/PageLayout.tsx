import cx from "classnames";
import * as React from "react";
import "../index.css";
import BreadCrumbs, { BreadcrumbItem } from "./BreadCrumbs";
import Footer from "./Footer";
import Header from "./Header";
import Img, { Image } from "./Img";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: Image;
  fullWidth?: boolean;
  breadcrumbs?: BreadcrumbItem[];
};

const PageLayout = ({
  title,
  children,
  subtitle,
  image,
  fullWidth,
  breadcrumbs,
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div
        className={cx("py-2 px-4 mx-auto flex-grow w-full", {
          "max-w-screen-lg": !fullWidth,
        })}
      >
        {breadcrumbs && <BreadCrumbs items={breadcrumbs} pageTitle={title} />}
        <div className="flex gap-4">
          {image && (
            <Img
              image={image}
              width={200}
              layout="fixed"
              className="rounded-md drop-shadow-md"
            />
          )}
          <div>
            <div className="text-4xl font-medium mb-4">{title}</div>
            {subtitle && <div className="text-gray-700 mb-4">{subtitle}</div>}
          </div>
        </div>
        <div className="flex flex-col gap-8 my-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
