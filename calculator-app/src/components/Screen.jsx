import { useState, useContext } from "react";
import { CalcContext } from "./CalcContext";

export default function Screen() {
    const { calc, setCalc} = useContext(CalcContext);
    const [ clicked, setClicked ] = useState(false);
    const copyToClipboard = () => {
        setClicked(false); // reset the animation
        setTimeout(() => setClicked(true), 0); // Give time to set state to true to trigger the animation
    }
    return(
        <div className="screen">
            <div>
                <p>{`${calc.expression}`}</p>
            </div>
            <div id="copyButton" className={`${clicked ? 'flicker' : ''}`} onClick={copyToClipboard}>
                <p>{`${calc.operand}`}</p>
            </div>
        </div>
    );
}