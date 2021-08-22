import React from "react";
import TriangleButton from "./TriangleButton";
import Label from "./Label";

interface HorizontalStepperProperties {
    value: string;
    decrease: () => void;
    increase: () => void;
}

const HorizontalStepper: React.FC<HorizontalStepperProperties> =
    ({value, decrease, increase}) => {
        return (
            <div className={'row'}>
                <TriangleButton invert={true} onClick={decrease}/>
                <Label text={value}/>
                <TriangleButton onClick={increase}/>
            </div>
        )
    }

export default HorizontalStepper
