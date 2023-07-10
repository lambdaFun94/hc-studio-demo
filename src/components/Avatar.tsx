import * as React from "react";
// import { Image as Img } from "@yext/pages/components";

import { ImageType } from "../types/autogen";

export interface AvatarProps {
  image?: ImageType;
  imgUrl?: string;
}

export const initialProps: AvatarProps = {
  // image: {
  //   height: 375,
  imgUrl:
    "https://a.mktgcdn.com/p/jwn23ktRk6uKz65OR7hl_SYIzvWgsk1XoCSFESbCgmY/300x375.jpg",
  //   width: 300,
  // },
};

export default function Avatar({ imgUrl }: AvatarProps) {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            {/* <Img className="h-28 w-28 rounded-full" image={image} /> */}
            {/* TODO: why isn't Yext Image component appearing the way I'd like? */}
            <img className="h-28 w-28 rounded-full" src={imgUrl} alt="" />
            <span
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
