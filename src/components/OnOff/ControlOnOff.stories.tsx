import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { ControlOnOff } from './ControlOnOff';



export default {
  title: 'Control OnOff',
  component: ControlOnOff
 
}

const callback = action("on or off clicked");

export const OnMode = () => <ControlOnOff toggle={true} onClick={callback} />;
export const OffMode = () => <ControlOnOff toggle={false} onClick={callback} />;


export const ModeChaining = () => {
  const [value, setValue] = useState<boolean>(true);
  return <ControlOnOff toggle={value} onClick={() => setValue(!value)} />;
};

