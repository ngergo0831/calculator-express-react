import { useState } from "react";
import ClearButtons from "./components/ClearButtons";
import DisplayInput from "./components/DisplayInput";
import LeftPanel from "./components/LeftPanel";
import OperationButtons from "./components/OperationButtons";

export default function App() {
    const [display, setDisplay] = useState("");
    const [calculation, setCalculation] = useState("");
    const [first, setFirst] = useState("");
    const [operation, setOperation] = useState("");

    /**
     *
     * @param {Number} fst - First number
     * @param {Number} snd - Second number
     * @param {Symbol} op - Operation
     * @returns {Number or CalculationError}
     */
    const solve = (fst, snd, op) => {
        switch (op) {
            case "/":
                return (fst / snd).toString();
            case "x":
                return (fst * snd).toString();
            case "-":
                return (fst - snd).toString();
            case "+":
                return (fst + snd).toString();
            default:
                return "Error";
        }
    };

    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex flex-column align-items-center justify-content-center m-auto"
        >
            <form
                className="d-flex flex-column align-items-center justify-content-center m-auto rounded p-3"
                style={{ height: "fit-content", width: "fit-content" }}
            >
                <DisplayInput display={display} calculation={calculation} />
                <ClearButtons
                    display={display}
                    setDisplay={setDisplay}
                    setCalculation={setCalculation}
                    setOperation={setOperation}
                    setFirst={setFirst}
                />
                <div className="d-flex w-100 align-items-center justify-content-center">
                    <LeftPanel display={display} setDisplay={setDisplay} />
                    <OperationButtons
                        display={display}
                        setDisplay={setDisplay}
                        operation={operation}
                        setOperation={setOperation}
                        first={first}
                        setFirst={setFirst}
                        solve={solve}
                        setCalculation={setCalculation}
                    />
                </div>
            </form>
        </div>
    );
}
