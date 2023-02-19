import React, { useState } from "react";
import { ItemsType, Select } from "./Select";


export default {
  title: "Select",
  component: Select,
};


export const ChangeSelect= () => {
    const items: ItemsType[] = [
        { title: "None", value: 0 },
        { title: "John", value: 1 },
        { title: "Ana", value: 2 },
        { title: "Meri", value: 3 },
        { title: "Alex", value: 4 },
        { title: "Perso1", value: 5 },
        { title: "Perso2", value: 6 },
        { title: "Perso3", value: 7 },
        { title: "Perso4", value: 8 },
        { title: "Perso5eddddddddddddddddddddddddddddddddddd", value: 9 },
    ];
    const [selectTitle, setSElectTitle] = useState("None");
    const onClickTwoHAndler = (value: any) => {
        setSElectTitle(value);
    };
    return <Select value={selectTitle} items={items} onChange={onClickTwoHAndler} />;
};


