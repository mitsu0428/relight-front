import React from "react";
import * as Footer from "@/components/designSystems/Footer";
import { Young_Serif } from "next/font/google";

const font = Young_Serif({
  weight: "400",
  style: "normal",
  preload: false,
});
export const Components = () => {
  return (
    <Footer.Components
      className={`${font.className}`}
      text="(c) 2023 YU WEB, All Right Resereved"
    />
  );
};
