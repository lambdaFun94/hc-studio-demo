import cx from "classnames";
import * as React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  block?: boolean;
  secondary?: boolean;
};

const Button = ({
  className,
  children,
  icon,
  block,
  secondary,
  ...otherProps
}: Props &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return (
    <button
      className={cx(
        " rounded-lg flex items-center justify-left gap-2 px-4 py-2  whitespace-nowrap transition-all",
        {
          "w-full": block,
          "border border-green-900 text-green-900 bg-white hover:bg-gray-200":
            secondary,
          "bg-green-700 text-white hover:bg-green-800": !secondary,
        },
        className
      )}
      {...otherProps}
    >
      {icon && <div className="opacity-50">{icon}</div>}
      {children}
    </button>
  );
};

export default Button;
