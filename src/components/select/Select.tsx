import { ifError } from "assert";
import React, { useState, KeyboardEvent } from "react";
import s from './Select.module.css'

export type ItemsType = {
  title: string;
  value: any;
};


type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemsType[]
};



export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [hoverElemnt, setHoverElement] = useState<string>(props.items[0].value);

    const divUnCollapsed = () => {
        setCollapsed(!collapsed)
    }


    const hoveredItem = props.items.find(i => i.value === hoverElemnt)


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
       
          for (let i = 0; i < props.items.length; i++) {
            debugger
            if (props.items[i].value === hoverElemnt) {
                if(e.key === "ArrowUp") {
                    if (i === 0) break;
                    setHoverElement(props.items[i - 1].value);
                    break;
                }
                if(e.key === "ArrowDown") {
                    if (i === props.items.length - 1) break;
                    setHoverElement(props.items[i + 1].value);
                    break;
                }

            }
          }
          if(e.key === "Enter") {
            props.onChange(hoveredItem?.title);
            setCollapsed(true)
          }
        
 

    };
    

    const namesClass = collapsed && s.active || s.names
    const triangleClass = collapsed && s.title_div_triangle || s.title_div_triangle_rotate 
   
    return (
   
        <div className={s.title_div} onClick={divUnCollapsed} tabIndex={0} onKeyUp={onKeyUp}>
          <p>{props.value}</p>
          <div className={triangleClass}></div>
          {/* <input autoFocus={!collapsed} type="text" onBlur={divCollapsed} value={22} /> */}

          <div className={namesClass}>
            {props.items.map((i) => {
                
                const onClickTwoHAndler = () => {
                    props.onChange(i.title);
                
                };

                const handleMouseEnter = () => {
                    setHoverElement(i.value)
                }
                return (
                  <div
                    key={i.value}
                    onClick={onClickTwoHAndler}
                    onMouseOver={handleMouseEnter}
                    className={
                      hoveredItem?.value === i.value ? s.active_item : ""
                    }
                  >
                    {i.title}
                  </div>
                );
            })}
          </div>
        </div>

    );
}