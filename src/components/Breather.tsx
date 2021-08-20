import * as React from 'react';
import {useState} from 'react';
import SvgImage from "./SvgImage";
import flower from "../public/flower.svg";
import HorizontalStepper from "./HorizontalStepper";
import Button from "./Button";

export const Breather = () => {
    const [minutes, setMinutes] = useState(5)
    const [isRunning, setRunning] = useState(false)

    const increaseMinutes = () => {
        if (minutes >= 60) {
            setMinutes(60);
        } else {
            setMinutes(minutes + 5);
        }
    }

    const decreaseMinutes = () => {
        if (minutes <= 5) {
            setMinutes(5)
        } else {
            setMinutes(minutes - 5);
        }
    }

    const run = () => {
        setRunning(true);
        setTimeout(() => setRunning(false), minutes * 1000 * 60)
    }

    return (
        <>
            <SvgImage path={flower} className={isRunning ? 'flower flower-static' : 'flower-static'}/>
            {isRunning ? null : <>
                <HorizontalStepper value={`${minutes} minutes`} decrease={decreaseMinutes}
                                   increase={increaseMinutes}/>
                <Button onClick={run} text={"Begin"}/>
            </>}
        </>
    );
};
