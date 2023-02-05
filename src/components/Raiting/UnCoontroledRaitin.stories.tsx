import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { UnControledRaiting } from "./UnCOntroledRaiting";
import { RaitingValueType } from "./Raiting";



export default {
  title: "Un Raiting stories",
  component: UnControledRaiting,
};


const callback = action('raiting changed iside component');

export const EmptyStars = () => <UnControledRaiting defaultValue={0} onChange={callback}/>;

export const Raiting1 = () => <UnControledRaiting defaultValue={1} onChange={callback}/>;
export const Raiting2 = () => <UnControledRaiting defaultValue={2} onChange={callback}/>;
export const Raiting3 = () => <UnControledRaiting defaultValue={3} onChange={callback}/>;
export const Raiting4 = () => <UnControledRaiting defaultValue={4} onChange={callback}/>;
export const Raiting5 = () => <UnControledRaiting defaultValue={5} onChange={callback}/>;

