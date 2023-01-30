import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type OnOffType = {
    // toggle: boolean
    onChange:(toogle: boolean) => void
}


function OnOff(props: OnOffType) {
    const [listRef] = useAutoAnimate<HTMLDivElement>();
    const [toggle, setToggle] = useState(false);

    const onStyle = {
      width: "30px",
      height: "20px",
      border: "1px solid #333",
      padding: "2px",
      cursor: "pointer",
      backgroundColor: toggle && "rgb(63, 173, 63)" || "white",
    };
    const offStyle = {
      width: "30px",
      height: "20px",
      border: "1px solid #333",
      padding: "2px",
      cursor: "pointer",
      backgroundColor: (toggle && "white") || "rgb(180, 67, 67)",
    };
    const indicatorStyle = {
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      border: "1px solid #333",
      backgroundColor: toggle && "rgb(63, 173, 63)" || "rgb(180, 67, 67)",
    };
  
    const onClicked = () => {
      setToggle(true);
      props.onChange(true);
    }
    const offClicked = () => {
      setToggle(false);
      props.onChange(false);
    }

    return (
        <div  className="box_container">
          {/* <div className={props.toggle && "box green_color" || "box red_color"}>On</div>
          <div className={!props.toggle && "box green_color" || "box red_color"}>Off</div>
          <div className={props.toggle && "circle green_color" || "circle red_color"}>circle</div> */}
          <div  
            onClick={onClicked} 
            style={onStyle}
            >
              On
            </div> 
          
          <div  
            onClick={offClicked}
             
            style={offStyle}
            >
              Off
            </div> 
          <div style={indicatorStyle}></div> 
        </div>
      );
}



export default OnOff