import React from "react";

type Props = {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: React.ReactNode;
};

export const Components = ({ tagName, className, children }: Props) => {
  const Tag = tagName;
  return (
    <Tag
      style={{
        margin: "10px",
        padding: "10px",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
};
