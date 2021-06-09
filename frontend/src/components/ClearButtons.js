import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export default function ClearButtons(props) {
    const { display, setDisplay, setCalculation, setOperation, setFirst } =
        props;

    const handleClear = (e) => {
        e.preventDefault();
        setCalculation("");
        setDisplay("");
        setOperation("");
        setFirst("");
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setDisplay(display.slice(0, -1));
    };

    return (
        <div className="d-flex align-items-center justify-content-between w-100 m-1">
            <button
                className="btn btn-secondary p-1 py-2 m-1"
                style={{ fontSize: "1.8em", width: "46.5%" }}
                onClick={handleClear}
            >
                <b>C</b>
            </button>
            <button
                className="btn btn-secondary p-1 py-2 ml-auto m-1"
                style={{ fontSize: "1.8em", width: "49.5%" }}
                onClick={handleDelete}
            >
                <FontAwesomeIcon icon={faBackspace} />
            </button>
        </div>
    );
}
