import React from "react";

type Props = {
  text: string;
  className?: string;
};

export const Components = ({ text, className }: Props) => {
  return (
    <footer
      className={className}
      style={{
        margin: "10px",
        padding: "10px",
      }}
    >
      <p>{text}</p>
    </footer>
  );
};
