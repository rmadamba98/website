import React, { useState } from "react";
import "./start.css";
import { First } from "../../containers";

const Start = () => {
    const renderStart = () => {
        setStartState({ proj: <First /> });
    };
    const [startState, setStartState] = useState({
        proj: <button onClick={renderStart}>Start</button>,
    });

    return <div className="rm__start">{startState.proj}</div>;
};

export default Start;
