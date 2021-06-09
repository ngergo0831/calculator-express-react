import React from "react";

export default function OperationButtons(props) {
    const {
        display,
        setDisplay,
        operation,
        setOperation,
        first,
        setFirst,
        solve,
        setCalculation,
    } = props;

    const handleEquals = (e) => {
        e.preventDefault();
        const result = solve(first, display, operation);
        setCalculation(first + operation + display + "=");
        setDisplay(result);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <button
                className="btn btn-warning m-1 btn-num"
                style={{ padding: "0.103em 0.5em" }}
                onClick={(e) => {
                    e.preventDefault();
                    setOperation("/");
                    setFirst(display);
                    setDisplay("");
                    setCalculation(display + "/");
                }}
            >
                /
            </button>
            <button
                className="btn btn-warning m-1 btn-num"
                style={{ padding: "0.103em 0.4em" }}
                onClick={(e) => {
                    e.preventDefault();
                    setOperation("x");
                    setFirst(display);
                    setDisplay("");
                    setCalculation(display + "x");
                }}
            >
                X
            </button>
            <button
                className="btn btn-warning m-1 btn-num"
                style={{ padding: "0.103em 0.52em" }}
                onClick={(e) => {
                    e.preventDefault();
                    setOperation("-");
                    setFirst(display);
                    setDisplay("");
                    setCalculation(display + "-");
                }}
            >
                -
            </button>
            <button
                className="btn btn-warning m-1 btn-num"
                style={{ padding: "0.103em 0.4em" }}
                onClick={(e) => {
                    e.preventDefault();
                    setOperation("+");
                    setFirst(display);
                    setDisplay("");
                    setCalculation(display + "+");
                }}
            >
                +
            </button>
            <button
                className="btn btn-warning m-1 btn-num"
                style={{ padding: "0.103em 0.4em" }}
                onClick={handleEquals}
            >
                =
            </button>
        </div>
    );
}
