import { useState } from "react";
import { action } from "@storybook/addon-actions";
import SelfControlledAcordion from "./SelfControlledAcordion";

export default {
  title: "UnControlledAcordion",
  component: SelfControlledAcordion,
};

const callback = action("acordion mode change event fired");


export const ModeChaining = () => {
 
  return (
    <SelfControlledAcordion
      titleValue={"Acordion"}
    />
  );
};
