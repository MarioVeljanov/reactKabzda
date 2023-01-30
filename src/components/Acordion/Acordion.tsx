import React from 'react';

type AcordionTypeProps = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function Acordion(props: AcordionTypeProps) {
    console.log('Title rendering');
    
    return (
      <div>
        <AcordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)} />
        {!props.collapsed && <AcordionBody />}
      </div>
    );
}



type AcordionPropsTitle = {
  title: string;
  onClick: () => void;
};

function AcordionTitle(props: AcordionPropsTitle) {
    console.log('Title rendering');
    return (
        <h3 onClick={props.onClick}>{ props.title }</h3>
    )
}

function AcordionBody() {
    console.log('Body rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Acordion