import cx from "classnames";
import * as React from "react";
import { Image } from "../types/kg";

type Props = {
  //Insert Props Here
  className?: string;
  image: Image;
  width?: number;
};

const Img = ({ className, image, width }: Props) => {
  return (
    <div
      className={cx(className)}
      style={{
        width: width ? `${width}px` : "auto",
      }}
    >
      <img
        src={image.thumbnails[0].url}
        className="rounded-md drop-shadow-md w-full"
      ></img>
    </div>
  );
};

export default Img;
