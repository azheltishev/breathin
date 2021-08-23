import * as React from 'react';
import {useState} from 'react';
import SvgImage from "./generic/SvgImage";
import flower from "../public/flower.svg";
import HorizontalStepper from "./generic/HorizontalStepper";
import Button from "./generic/Button";

export const Breather = () => {
    const [minutes, setMinutesState] = useState(+(localStorage.getItem('breathing-minutes') || 5))
    const [isRunning, setRunning] = useState(false)

    const setMinutes = (v: number) => {
        setMinutesState(v);
        localStorage.setItem('breathing-minutes', v.toString());
    }

    const increaseMinutes = () => {
        if (minutes < 5) {
            setMinutes(minutes + 1);
        } else if (minutes < 60) {
            setMinutes(minutes + 5);
        } else {
            setMinutes(60);
        }
    }

    const decreaseMinutes = () => {
        if (minutes <= 1) {
            setMinutes(1)
        } else if (minutes <= 5) {
            setMinutes(minutes - 1);
        } else {
            setMinutes(minutes - 5)
        }
    }

    const run = () => {
        setRunning(true);
        setTimeout(() => setRunning(false), minutes * 1000 * 60)
    }

    return (
        <div className={isRunning ? 'hide-cursor' : ''}>
            <SvgImage path={flower} className={isRunning ? 'flower flower-static' : 'flower-static'}/>
            <div className={isRunning ? 'hidden' : ''}>
                <HorizontalStepper value={`${minutes} minute${minutes > 1 ? 's' : ''}`} decrease={decreaseMinutes}
                                   increase={increaseMinutes}/>
                <Button onClick={run} text={"Begin"}/>
            </div>
        </div>
    );
};
