import React from "react";
import { PiLockKey, PiLockKeyOpen } from "react-icons/pi";

type Props = {
  placeholder: string;
  className?: string;
};

export const Components = ({ placeholder, className }: Props) => {
  const [state, setState] = React.useState("close");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const password = "xxx";

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
        onChange={handleChangeInput}
      />
      <button
        style={{
          margin: "10px",
          padding: "10px",
        }}
        onClick={() => {
          if (state === password) {
            window.location.href = "/nextPage";
          } else {
            alert("Not Matched");
          }
        }}
      />
      <PiLockKey />
    </span>
  );
};
