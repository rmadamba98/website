import React from "react";
import "./first.css";
import { Prompt } from "../../components";
import { CSC, About } from "../../containers";

const First = () => {
    return (
        <div className="rm__first">
            <Prompt
                text="Welcome to Ryan's Portfolio!"
                c1="Who is Ryan? "
                desc1="About Me"
                c2="Ryan?...Madamba? "
                desc2="Current Project"
                proj1=<About />
                proj2=<CSC />
                intro1="Let me introduce you to Ryan!"
                intro2="Oh, you know Ryan! Have you seen his most recent project?"
            />
        </div>
    );
};

export default First;
