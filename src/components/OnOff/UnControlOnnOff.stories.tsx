import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { OnOff } from "./OnOff";

export default {
  title: "Un Control OnOff",
  component: OnOff,
};

const callback = action("on or off clicked");

export const OnMode = () => <OnOff toggle={true} onChange={callback} />;
export const OffMode = () => <OnOff toggle={false}  onChange={callback} />;
export const BugMode = () => <div></div>
