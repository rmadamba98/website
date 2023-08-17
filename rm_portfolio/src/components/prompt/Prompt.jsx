import React, { useState } from "react";
import "./prompt.css";

function Prompt(props) {
    const [projState, setProjState] = useState({ proj: <></> });
    const renderProj1 = () => {
        setProjState({ proj: props.proj1 });
    };

    const renderProj2 = () => {
        setProjState({ proj: props.proj2 });
    };

    const disableBtn1 = () => {
        setBtnState({
            button1: (
                <button disabled onClick={renderProj1}>
                    <h1>{props.c1}</h1>
                    <h2>{props.desc1}</h2>
                </button>
            ),
            button2: (
                <button onClick={renderProj1}>
                    <h1>{props.c2}</h1>
                    <h2>{props.desc2}</h2>
                </button>
            ),
        });
    };

    const disableBtn2 = () => {
        setBtnState({
            button1: (
                <button onClick={renderProj1}>
                    <h1>{props.c1}</h1>
                    <h2>{props.desc1}</h2>
                </button>
            ),
            button2: (
                <button disabled onClick={renderProj1}>
                    <h1>{props.c2}</h1>
                    <h2>{props.desc2}</h2>
                </button>
            ),
        });
    };

    const [btnState, setBtnState] = useState({
        button1: (
            <button
                onClick={() => {
                    renderProj1();
                    disableBtn2();
                }}
            >
                <h1>{props.c1}</h1>
                <h2>{props.desc1}</h2>
            </button>
        ),
        button2: (
            <button
                onClick={() => {
                    renderProj2();
                    disableBtn1();
                }}
            >
                <h1>{props.c2}</h1>
                <h2>{props.desc2}</h2>
            </button>
        ),
    });

    return (
        <div className="rm__prompt">
            <div className="rm__prompt-text">{props.text}</div>
            <div className="rm__prompt-choices">
                <div className="rm__prompt-choices-L">{btnState.button1}</div>
                <div className="rm__prompt-choices-R">{btnState.button2}</div>
            </div>
            <div className="rm__prompt-project">{projState.proj}</div>
        </div>
    );
}

export default Prompt;
