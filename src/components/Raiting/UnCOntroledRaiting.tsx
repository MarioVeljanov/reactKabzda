import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useState } from "react";

type RaitingValueType =  0 | 1 | 2 | 3 | 4 | 5;


type RaitingPoropsType = {
  defaultValue?: RaitingValueType
  onChange: (value: RaitingValueType) => void
}

export function UnControledRaiting(props: RaitingPoropsType) {
    const [value, setValue] = useState<RaitingValueType>(props.defaultValue ?? 0)


    const onClickHandler = (value: RaitingValueType) => {
        setValue(value)
        props.onChange(value)
    }

    return (
      <div>
        <Star selected={value > 0} changeValue={() => onClickHandler(1)} />
        <Star selected={value > 1} changeValue={() => onClickHandler(2)} />
        <Star selected={value > 2} changeValue={() => onClickHandler(3)} />
        <Star selected={value > 3} changeValue={() => onClickHandler(4)} />
        <Star selected={value > 4} changeValue={() => onClickHandler(5)} />
      </div>
    );
    }


    
type StarPropsType = {
    selected: boolean;
    changeValue: () => void
};

function Star(props: StarPropsType) {
  console.log("Star rendering");
  const onCalcbackHandler = () => props.changeValue()
  
    return (
      <span onClick={onCalcbackHandler}>
        {props.selected ? <b className={"star star-yellow"}>star </b> : "star "}
      </span>
    );

}
