import { useContext } from "react"
import { CalcContext } from "./CalcContext"

export default function Button({ btnKey, btnStyle, btnValue }) {
    const { calc, setCalc } = useContext(CalcContext);
    const piValue = 3.14159;
    const eulerValue = 2.71828
    const handleButtonClick = () => {
        const handleNumberInput = () => {
            setCalc(c => ({
                ...c,
                operand: '0πe'.includes(`${c.operand}`.substring(0)) ? `${btnValue}` : `${c.operand}${btnValue}`
            }))
        }
        const handleDecimal = () => {
            setCalc(c => ({
                ...c,
                operand: 'πe'.includes(`${c.operand}`.substring(0)) ? `0${btnValue}` : (`${c.operand}`.includes(`.`) ? c.operand : c.operand + `${btnValue}`) 
            }))
        }
        const handleSymbolInput = () => {
            setCalc(c => ({
                ...c,
                operand: `${btnValue}`
            }))
        }
        const handleInverse = () => {
            setCalc(c => ({
                ...c,
                operand: `${-1 * parseFloat(c.operand)}`
            }))
        }
        const handleClear = () => {
            setCalc(c => ({
                ...c,
                expression: "",
                operand: "0",
                operator: "",
                result: ""
            }))
        }
        const handleOperation = () => {
            setCalc(c => ({
                ...c,
                prevOperand: c.operand === '' ? c.prevOperand : (c.operand === 'π' ? piValue : (c.operand === 'e' ? eulerValue : c.operand))
            }))
            setCalc(c => ({
                ...c,
                operand: '',
                operator: `${btnValue}`,
                expression: `${((compareStrings(`${c.prevOperand}`, '123456789')) ? `${c.prevOperand}` : '0')} ${btnValue}`
            }))
        }
        const handleResult = () => {
            let result = 0;
            let x = parseFloat(calc.prevOperand)
            let y = (calc.operand === 'π' ? piValue : (calc.operand === 'e' ? eulerValue : parseFloat(calc.operand)))
            switch(calc.operator) {
                case '÷':
                    result = x/y;
                    break;
                case '×':
                    result = x*y;
                    break;
                case '-':
                    result = x-y;
                    break;
                case '+':
                    result = x+y;
                    break;  
                default:
                    console.log("Unknown operator");
            }
            setCalc(c => ({
                ...c,
                expression: "",
                operand: parseFloat(result.toFixed(5)),
                prevOperand: "",
                operator: "",
            }))
        }
        const compareStrings = (str1, str2) => {
            const set1 = new Set(str1.split(''));
            const set2 = new Set(str2.split(''));
            for(let char of set1) {
                if(set2.has(char)) {
                    return true;
                }
            }
            return false;
        }

        const action = {
            '0': handleNumberInput,
            '1': handleNumberInput,
            '2': handleNumberInput,
            '3': handleNumberInput,
            '4': handleNumberInput,
            '5': handleNumberInput,
            '6': handleNumberInput,
            '7': handleNumberInput,
            '8': handleNumberInput,
            '9': handleNumberInput,
            '.': handleDecimal,
            'π': handleSymbolInput,
            'e': handleSymbolInput,
            '+/-': handleInverse,
            'c': handleClear,
            '÷': handleOperation,
            '×': handleOperation,
            '-': handleOperation,
            '+': handleOperation,
            '=': handleResult,
        }
        return action[btnValue]()
    }
    return(
        <button key={btnKey} className={ `${btnStyle} grid-button` } 
                value={ btnValue } 
                onClick={handleButtonClick}>
        { btnValue }
        </button>
    );
}