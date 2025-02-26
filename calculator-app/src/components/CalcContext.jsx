import { useState, createContext } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        expression: "",
        operand: 0,
        prevOperand: "",
        operator: "",
    });
    const providerValue = {
        calc, setCalc
    }

    return (
        <CalcContext.Provider value={ providerValue }>
            { children }
        </CalcContext.Provider>
    );
}
export default CalcProvider