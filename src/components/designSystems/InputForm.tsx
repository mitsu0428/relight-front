import React from "react";
import { PiLockKey, PiLockKeyOpen } from "react-icons/pi";

type Props = {
  placeholder: string;
  className?: string;
};

export const Components = ({ placeholder, className }: Props) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={className}
      />
      <PiLockKey />
    </span>
  );
};
