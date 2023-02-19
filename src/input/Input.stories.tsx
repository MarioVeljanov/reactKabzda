import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from "react";
import { Input } from "./Input";

export default {
  title: "components/Input",
  component: Input,
};


export const UncotrolledInput = () => <input/>
export const TrackValueOfUncotrolledInput = () => {
  const [value, setValue] = useState("")
  return (
    <>
      <input onChange={(e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
      }}/>
        -- {value}
    </>
  );
}

export const GetValueOfUncotrolledInputByButtonPress = () => {
  const [value, setValue] = useState("")
  let title = useRef<HTMLInputElement>(null);

  const save = () => {
    if (title.current) {
      const el = title.current.value;
      setValue(el);
    }
    
  }
  return (
    <>
      <input ref={title}/> 

      <button onClick={save}>Press</button>

      actual value: {value}
    </>
  );
}


export const CotrolledInput = () => {
  const [parentValue, setParentValue] = useState("")
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return  <input value={parentValue} onChange={onChangeHandler}/>
}

export const CotrolledChexbocx = () => {
    const [parentValue, setParentValue] = useState(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.checked);
    };

    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler} />;
}

export const CotrolledSelecet = () => {
      const [parentValue, setParentValue] = useState<string | undefined>(undefined);
      const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
      };

      return (
        <select value={parentValue} onChange={onChangeHandler}>
          <option value="1">London</option>
          <option value="2">Paris</option>
          <option value="3">Moscow</option>
        </select>
      );
}
