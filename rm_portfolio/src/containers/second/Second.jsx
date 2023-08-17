import React from "react";
import "./second.css";
import { Prompt } from "../../components";
import { CSC } from "../../containers";

const Second = () => {
    return (
        <div className="rm__second">
            <Prompt
                text="Second Question"
                c1="Choice #1"
                c2="Choice #2"
                proj1=<CSC />
                proj2=<CSC />
            />
        </div>
    );
};

export default Second;
