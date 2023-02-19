import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useReducer, useState } from 'react';
import { reducer, TOOGLE } from './reducer';



type SelfAcordionTypeProps = {
  titleValue: string;
};

export type ActionType = {
  type: string
}


const SelfControlledAcordion: React.FC<SelfAcordionTypeProps> = (props) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>();
    // const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispath] = useReducer(reducer, {collapsed: false});

    // const collapsedHandler = () => setCollapsed(!collapsed)
    const collapsedHandler = () => dispath({type: TOOGLE})

    return (
      <div>
        <div ref={listRef}>
          <AcordionTitle title={props.titleValue} callBack={collapsedHandler} />
          {!state.collapsed && <AcordionBody />}
        </div>
      </div>
    );
};


type AcordionPropsTitle = {
  title: string;
  callBack: () => void
};

function AcordionTitle(props: AcordionPropsTitle) {
  console.log("Title rendering");
  const onCalcbackHandler = () => props.callBack()
  return <h2 onClick={onCalcbackHandler}>--{props.title}--</h2>;
}

function AcordionBody() {
  console.log("Body rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default SelfControlledAcordion;