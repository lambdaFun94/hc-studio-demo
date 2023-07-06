import * as React from "react";
import {
  ComplexImageType,
  ImageType,
  Image as Img,
} from "@yext/pages/components";

// import { Image as ImageType } from "../types/autogen";

// export interface ImageThumbnail {
//   url: string;
//   width: number;
//   height: number;
// }

// export interface ImageType {
//   url: string;
//   width: number;
//   height: number;
//   thumbnails?: ImageThumbnail[];
//   alternateText?: string;
// }

export interface ImageProps {
  image: ComplexImageType | ImageType;
  // text: string;
}

export const initialProps: ImageProps = {
  image: {
    height: 375,
    url: "https://a.mktgcdn.com/p/jwn23ktRk6uKz65OR7hl_SYIzvWgsk1XoCSFESbCgmY/300x375.jpg",
    width: 300,
  },
};

export default function Image({ image }: ImageProps) {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <Img className="h-16 w-16 rounded-full" image={image} />
            <span
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* <div className="pt-1.5">
    //       <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
    //       <p className="text-sm font-medium text-gray-500">
    //         Applied for{" "}
    //         <a href="#" className="text-gray-900">
    //           Front End Developer
    //         </a>{" "}
    //         on <time dateTime="2020-08-25">August 25, 2020</time>
    //       </p>
    //     </div> */}
      </div>
    </div>
  );
}
