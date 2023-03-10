import React from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type AcordionTypeProps = {
  titleValue: string;
  collapsed: boolean;
  /**
   * Callback that is called when any item clicked
   * @param value is value of clicked item
   */
  onClick: (collapsed: boolean) => void;
  items: ItemsType[];
  onClickTwo: (value: number) => void;
};

export function Acordion(props: AcordionTypeProps) {
    console.log('Title rendering');
    
    return (
      <div>
        <AcordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)} />
        {!props.collapsed && <AcordionBody items={props.items} onClickTwo={props.onClickTwo}/> }
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
        <h3 onClick={props.onClick}>--{ props.title }--</h3>
    )
}


type AcordionBody = {
    items: ItemsType[]
    onClickTwo: (value: any) => void
}
function AcordionBody(props: AcordionBody) {
    console.log('Body rendering');
    return (
      <ul>
        {props.items &&
          props.items.map((i) => <li key={i.value} onClick={() => props.onClickTwo(i.title)}>{i.title}</li>)}
      </ul>
    ); 
    
}

