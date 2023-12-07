import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Components = ({ className, children }: Props) => {
  return (
    <div
      style={{
        width: "450px",
        height: "450px",
        backgroundColor: "white",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
};
