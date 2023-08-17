import React from "react";
import "./aprompt.css";
import { Prompt } from "../../components";
import { CSC } from "../../containers";

const APrompt = () => {
    return (
        <div className="rm__second">
            <Prompt
                text="Cool right? Want to see some of Ryan's projects?"
                c1="Ryan the Developer"
                desc1="Front End"
                c2="Ryan the Designer"
                desc2="UI/UX Design"
                proj1=<CSC />
                proj2=<CSC />
            />
        </div>
    );
};

export default APrompt;
