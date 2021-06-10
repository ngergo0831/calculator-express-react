import axios from "axios";
import React from "react";

export default function MemoryButtons(props) {
    const { display, setDisplay, setAlert, setAlertMessage } = props;

    const handleClear = (e) => {
        e.preventDefault();
        axios
            .post("/memory", { number: "0" })
            .then(() => {
                setAlert(false);
                setAlertMessage("Memory cleared successfully!");
            })
            .catch((err) => console.log(err));
    };

    const handleRead = (e) => {
        e.preventDefault();
        axios
            .get("/memory")
            .then((res) => {
                let { number } = res.data;
                setDisplay(number);
            })
            .catch((err) => console.log(err));
    };

    const handleWrite = (e) => {
        e.preventDefault();
        axios
            .post("/memory", { number: display })
            .then((res) => {
                setAlert(false);
                setAlertMessage(`${res.data.number} stored successfully!`);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="d-flex align-items-start">
            <button
                className="btn btn-secondary m-1"
                style={{ fontSize: "2.1em", padding: "0.8em 0.45em" }}
                onClick={handleClear}
            >
                MC
            </button>
            <button
                className="btn btn-secondary m-1"
                style={{ fontSize: "2.1em", padding: "0.8em 0.4em" }}
                onClick={handleWrite}
            >
                M+
            </button>
            <button
                className="btn btn-secondary m-1"
                style={{ fontSize: "2.1em", padding: "0.8em 0.75em" }}
                onClick={handleRead}
            >
                M
            </button>
        </div>
    );
}
