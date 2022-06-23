import cx from "classnames";
import * as React from "react";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
  className?: string;
  title: string;
};

const Section = ({ className, children, title }: Props) => {
  return (
    <div className={cx("", className)}>
      <div className="text-xl font-medium mb-2">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
