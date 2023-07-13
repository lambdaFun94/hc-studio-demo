import * as React from "react";

export interface NavBarProps {
  labels: string[];
}

export const initialProps: NavBarProps = {
  labels: ["About", "Insurances", "Locations"],
};

export default function NavBar({ labels }: NavBarProps) {
  const [selected, setSelected] = React.useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="ml-6 flex space-x-8">
            {labels.map((label, index) => (
              <button
                key={index}
                className={`${
                  index === selected
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                onClick={() => handleSelect(index)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
