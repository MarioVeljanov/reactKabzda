import react, { useState } from 'react'
import { Clock } from './Clock';




export default {
  title: "components/Clock",
  component: Clock
};

export const BaseExpamle = () => {
    return <Clock toogleClock={false}/>
}
