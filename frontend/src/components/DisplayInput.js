import React from "react";

export default function DisplayInput(props) {
    const { display, calculation} = props;

    return (
        <>
            <div className="d-flex justify-content-between w-100">
                <div className="p-2">Aktuális művelet:</div>
                <div className="ml-auto p-2">{calculation}</div>
            </div>
            <input
                id="display-input"
                name="display-input"
                placeholder="0"
                style={{
                    textAlign: "right",
                    height: "2em",
                    width: "7.6em",
                    fontSize: "3em",
                }}
                maxLength={11}
                value={display}
                type="text"
                readOnly
            ></input>
        </>
    );
}
