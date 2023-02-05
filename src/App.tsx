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


function App() {
  const [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);
  const [acordionValue, setAcordionValue] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(true);

  const items: ItemsType[] = [
    {title: 'John', value: 1},
    {title: 'Ana', value: 2},
    {title: 'Meri', value: 3},
    {title: 'Alex', value: 4},
  ]
  return (
    <div>
      <AppTitle value={"This is my App"} />

      {/* <SelfControlledAcordion titleValue={"One"} /> */}
      {/* <UnControledRaiting /> */}

      <Acordion collapsed={acordionValue} onClick={setAcordionValue} titleValue={'Missing title'} items={items}/>
      <Raiting value={raitingValue} onClick={setRaitingValue} />
      <ControlOnOff toggle={toggle} onClick={() => setToggle(!toggle)}/>

  
      <OnOff toggle={on} onChange={setOn}/> {on.toString()}
    
      {/* <OnOff /> */}
      {/* <OnOff /> */}
      {/* <OnOff /> */}
    </div>
  );
}

export default App;



