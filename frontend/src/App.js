import { useEffect, useState } from "react";
import ClearButtons from "./components/ClearButtons";
import DisplayInput from "./components/DisplayInput";
import LeftPanel from "./components/LeftPanel";
import OperationButtons from "./components/OperationButtons";

export default function App() {
    const [display, setDisplay] = useState("");
    const [calculation, setCalculation] = useState("");
    const [first, setFirst] = useState("");
    const [operation, setOperation] = useState("");
    const [alert, setAlert] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");

    /**
     *
     * @param {Number} fst - First number
     * @param {Number} snd - Second number
     * @param {Symbol} op - Operation
     * @returns {Number or CalculationError}
     */
    const solve = (fst, snd, op) => {
        let result;
        switch (op) {
            case "/":
                if (parseInt(snd) === 0) {
                    return "Division by 0!";
                }
                result = Number(Number(fst) / Number(snd))
                    .toFixed(2)
                    .toString();
                return result.length > 9
                    ? "Cannot display!"
                    : toDisplay(result);
            case "x":
                result = Number(Number(fst) * Number(snd))
                    .toFixed(2)
                    .toString();
                return result.length > 9
                    ? "Cannot display!"
                    : toDisplay(result);
            case "-":
                result = Number(Number(fst) - Number(snd))
                    .toFixed(2)
                    .toString();
                return result.length > 9
                    ? "Cannot display!"
                    : toDisplay(result);
            case "+":
                result = Number(Number(fst) + Number(snd))
                    .toFixed(2)
                    .toString();
                return result.length > 9
                    ? "Cannot display!"
                    : toDisplay(result);
            default:
                return "Error";
        }
    };

    const toDisplay = (str) => {
        if (
            str.split("").reverse().join("")[0] === "0" &&
            str.split("").reverse().join("")[1] === "0"
        ) {
            return str.slice(0, -3);
        }
        return str;
    };

    useEffect(() => {
        if (!alert) {
            setTimeout(() => setAlert(true), 3000);
            console.log("asd");
        }
    }, [alert, setAlert]);

    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex flex-column align-items-center justify-content-center m-auto"
        >
            <form
                className="d-flex flex-column align-items-center justify-content-center m-auto rounded p-3"
                style={{ height: "fit-content", width: "fit-content" }}
            >
                <div
                    className="alert alert-success w-100"
                    role="alert"
                    hidden={alert}
                >
                    {alertMessage}
                </div>
                <DisplayInput display={display} calculation={calculation} />
                <ClearButtons
                    display={display}
                    setDisplay={setDisplay}
                    setCalculation={setCalculation}
                    setOperation={setOperation}
                    setFirst={setFirst}
                />
                <div className="d-flex w-100 align-items-center justify-content-center">
                    <LeftPanel
                        display={display}
                        setDisplay={setDisplay}
                        setAlert={setAlert}
                        setAlertMessage={setAlertMessage}
                    />
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
