import React from "react";
import "./aprompt.css";
import { Prompt } from "../../components";
import { CSC, Easel } from "../../containers";

const APrompt = () => {
    return (
        <div className="rm__aprompt">
            <Prompt
                text="Ready to see some of Ryan's projects?"
                c1="Ryan the Developer"
                desc1="Front End"
                c2="Ryan the Designer"
                desc2="UI/UX Design"
                proj1=<CSC />
                proj2=<Easel />
                intro1="Check out Ryan's most recent project"
                intro2="Check out this UX Case Study"
            />
        </div>
    );
};

export default APrompt;
