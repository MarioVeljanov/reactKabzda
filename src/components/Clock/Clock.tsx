import react, { useEffect, useState } from "react";
import s from './Clock.module.css'

type PropsType = {
    toogleClock: boolean
};

export const Clock: React.FC<PropsType> = ({toogleClock}) => {
    return <>
        { toogleClock
            ? <DigitalClock/>
            : <AnalogClock/>
        }
    </>
};



const DigitalClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(() => {
        setDate(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    const f1 = (time: number) => {
        return time < 10 ? "0" + time : time;
    };
    return (
        <div>
        <span>{f1(date.getHours())}</span>:
        <span>{f1(date.getMinutes())}</span>:
        <span>{f1(date.getSeconds())}</span>
        </div>
    );
}

const AnalogClock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);
    return (
      <div className={s.container}>
        <img
          className={s.imgClock}
          src="https://w7.pngwing.com/pngs/980/515/png-transparent-clock-face-analog-clock-without-hands-angle-white-text.png"
        />

        <div className={s.secondContainer} style={{transform: `rotateZ(${(date.getSeconds() * 360) / 60}deg)`}}>
          <div className={s.secondArrow}></div>
        </div>
        <div className={s.minutContainer} style={{transform: `rotateZ(${(date.getMinutes() * 360) / 60}deg)`}}>
          <div className={s.minutArrow}></div>
        </div>
        <div className={s.hourContainer} style={{transform: `rotateZ(${(date.getHours() * 360) / 12}deg)`}}>
          <div className={s.hourArrow}></div>
        </div>
      </div>
    );
}