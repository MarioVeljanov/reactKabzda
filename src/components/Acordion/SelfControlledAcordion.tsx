import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useState } from 'react';


type SelfAcordionTypeProps = {
  titleValue: string;
};

const SelfControlledAcordion: React.FC<SelfAcordionTypeProps> = (props) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const collapsedHandler = () => setCollapsed(!collapsed)

    return (
      <div>
        <div ref={listRef}>
          <AcordionTitle title={props.titleValue} callBack={collapsedHandler} />
          {!collapsed && <AcordionBody />}
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