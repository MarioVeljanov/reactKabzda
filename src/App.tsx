import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Acordion, ItemsType} from './components/Acordion/Acordion';
import { AppTitle } from './components/Title/AppTitle';
import { Raiting, RaitingValueType } from './components/Raiting/Raiting';
import {OnOff} from './components/OnOff/OnOff';
import SelfControlledAcordion from './components/Acordion/SelfControlledAcordion';
import { UnControledRaiting } from './components/Raiting/UnCOntroledRaiting';
import {ControlOnOff} from './components/OnOff/ControlOnOff';
import { Select } from './components/select/Select';
import { title } from 'process';


function App() {
  const [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);
  const [acordionValue, setAcordionValue] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(true);

  const [selectTitle, setSElectTitle] = useState('None')

  const items: ItemsType[] = [
    {title: 'None', value: 0},
    {title: 'John', value: 1},
    {title: 'Ana', value: 2},
    {title: 'Meri', value: 3},
    {title: 'Alex', value: 4},
    {title: "Perso1", value: 5},
    {title: "Perso2", value: 6},
    {title: "Perso3", value: 7},
    {title: "Perso4", value: 8},
    {title: "Perso5eddddddddddddddddddddddddddddddddddd", value: 9},
  ]


   const onClickTwoHAndler = (value: any) => {
     setSElectTitle(value);
   };
  return (
    <div>
      <AppTitle value={"This is my App"} />
      <SelfControlledAcordion titleValue={"One"} />
      <UnControledRaiting  onChange={() => {}}/>
      <Acordion
        collapsed={acordionValue}
        onClick={setAcordionValue}
        titleValue={"Missing title"}
        items={items}
        onClickTwo={(value) => {console.log(value)}}
      />
      {/* <Raiting value={raitingValue} onClick={setRaitingValue} /> */}
      <ControlOnOff toggle={toggle} onClick={() => setToggle(!toggle)} />
      <OnOff toggle={on} onChange={setOn} /> {on.toString()}

     

      <Select value={selectTitle} items={items} onChange={onClickTwoHAndler}
/>
    </div>
  );
}

export default App;



