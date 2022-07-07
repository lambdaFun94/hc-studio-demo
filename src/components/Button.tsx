import cx from "classnames";
import * as React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
};

const Button = ({
  className,
  children,
  ...otherProps
}: Props &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return (
    <div className={cx(className)}>
      <button
        className="bg-green-700 text-white rounded-sm flex items-center justify-center gap-2 px-4 py-2 mb-2 hover:bg-green-800"
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
