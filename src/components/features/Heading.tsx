import React from "react";
import * as Heading from "@/components/designSystems/Heading";
import { IM_Fell_Great_Primer_SC } from "next/font/google";

const font = IM_Fell_Great_Primer_SC({
  weight: "400",
  style: "normal",
  preload: false,
});

export const Components = () => {
  return (
    <Heading.Components
      tagName="h1"
      className={`${font.className}`}
    >
      Re:Light
    </Heading.Components>
  );
};
