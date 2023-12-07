import React from "react";
import * as InputForm from "@/components/designSystems/InputForm";
import { Halant } from "next/font/google";

const font = Halant({
  weight: "400",
  style: "normal",
  preload: false,
});

export const Components = () => {
  return (
    <InputForm.Components
      placeholder="Pass"
      className={`${font.className}`}
    />
  );
};
