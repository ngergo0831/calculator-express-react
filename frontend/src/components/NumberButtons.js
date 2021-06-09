import React from "react";

export default function NumberButtons(props) {
    const { display, setDisplay } = props;

    const handleNumberClick = (num) => {
        if (display.length < 10) {
            setDisplay(display + num);
        }
    };

    return (
        <div className="d-flex flex-column align-items-start">
            <div>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".7");
                        else handleNumberClick("7");
                    }}
                >
                    7
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".8");
                        else handleNumberClick("8");
                    }}
                >
                    8
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".9");
                        else handleNumberClick("9");
                    }}
                >
                    9
                </button>
            </div>
            <div>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".4");
                        else handleNumberClick("4");
                    }}
                >
                    4
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".5");
                        else handleNumberClick("5");
                    }}
                >
                    5
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".6");
                        else handleNumberClick("6");
                    }}
                >
                    6
                </button>
            </div>
            <div>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".1");
                        else handleNumberClick("1");
                    }}
                >
                    1
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".2");
                        else handleNumberClick("2");
                    }}
                >
                    2
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".3");
                        else handleNumberClick("3");
                    }}
                >
                    3
                </button>
            </div>
            <div>
                <button
                    className="btn btn-dark m-1"
                    style={{ fontSize: "1.8em", padding: "1.05em 0.62em" }}
                >
                    <b>+/-</b>
                </button>
                <button
                    className="btn btn-dark m-1 px-4 btn-num"
                    onClick={(e) => {
                        e.preventDefault();
                        if (display === "0") handleNumberClick(".0");
                        else handleNumberClick("0");
                    }}
                >
                    0
                </button>
                <button
                    className="btn btn-dark m-1"
                    style={{ fontSize: "4.3em", padding: "0em 0.48em" }}
                    onClick={(e) => {
                        e.preventDefault();
                        if (!display.includes('.') && display.length !== 9) handleNumberClick(".");
                    }}
                >
                    .
                </button>
            </div>
        </div>
    );
}
