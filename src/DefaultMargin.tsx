import React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultMargin = ({ children }: Props) => {
  return (
    <div className="px-6 sm:px-16 flex justify-center items-center ">
      <div className="xl:max-w-[1200px] w-full ">{children}</div>
    </div>
  );
};

export default DefaultMargin;
