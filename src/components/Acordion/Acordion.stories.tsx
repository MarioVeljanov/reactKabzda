import { ChangeEvent, useState } from "react";
import { Acordion, AcordionTypeProps, ItemsType } from "./Acordion";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
  title: "components/Acordion",
  component: Acordion,
};

const callback = action("acordion mode change event fired");
const onClickcallback = action("some item was clicked");

export const Tempalete: Story<AcordionTypeProps> = (args) => <Acordion {...args} />;

export const MenuCollapsed = Tempalete.bind({})
MenuCollapsed.args = {
  collapsed: true,
  onClick: callback,
  titleValue: 'Acordion',
  items: []
}

export const unCollapsedMode = Tempalete.bind({});
unCollapsedMode.args = {
  collapsed: false,
  onClick: callback,
  titleValue: "Acordion",
  items: [
    { title: "John", value: 1 },
    { title: "Ana", value: 2 },
    { title: "Meri", value: 3 },
    { title: "Alex", value: 4 },
  ],
};







export const ModeChaining = () => {
  const [value, setValue] = useState<boolean>(true);
  const items: ItemsType[] = [
    { title: "John", value: 1 },
    { title: "Ana", value: 2 },
    { title: "Meri", value: 3 },
    { title: "Alex", value: 4 },
  ];
  return (
    <Acordion
      collapsed={value}
      onClick={setValue}
      titleValue={"Acordion"}
      items={items}
      onClickTwo={onClickcallback}
    />
  );
};



export const AcordionSelect = () => {
  const [value, setValue] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('Acordion')
  const items: ItemsType[] = [
    { title: "John", value: 1 },
    { title: "Ana", value: 2 },
    { title: "Meri", value: 3 },
    { title: "Alex", value: 4 },
  ];

  const onClickTwoHAndler = (value: any) => {
    setTitle(value)
  }

  return (
    <Acordion
      collapsed={value}
      onClick={setValue}
      titleValue={title}
      items={items}
      onClickTwo={onClickTwoHAndler}
    />
  );
};
