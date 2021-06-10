import React from "react";
import MemoryButtons from "./MemoryButtons";
import NumberButtons from "./NumberButtons";

export default function LeftPanel(props) {
    const { display, setDisplay, setAlert, setAlertMessage } = props;
    return (
        <div style={{ width: "fit-content" }}>
            <div className="d-flex flex-column m-auto align-items-start">
                <MemoryButtons
                    display={display}
                    setDisplay={setDisplay}
                    setAlert={setAlert}
                    setAlertMessage={setAlertMessage}
                />
                <NumberButtons display={display} setDisplay={setDisplay} />
            </div>
        </div>
    );
}
