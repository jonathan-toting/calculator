import { useContext } from "react";
import { CalcContext } from "./CalcContext";

export default function Screen() {
    const { calc, setCalc} = useContext(CalcContext);
    return(
        <div className="screen">
            <div>
                <p>{`${calc.expression}`}</p>
            </div>
            <div>
                <p>{`${calc.operand}`}</p>
            </div>
        </div>
    );
}