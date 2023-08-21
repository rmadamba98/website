import React from "react";
import "./cprompt.css";
import { Prompt } from "../../components";
import Easel from "../easel/Easel";
import FliptEd from "../flipted/FliptEd";

const CPrompt = () => {
    return (
        <div className="rm__cprompt">
            <Prompt
                text="Want to see more?"
                c1="More SWE!"
                desc1="flipt.Ed"
                c2="Design, Please!"
                desc2="Easel"
                proj1=<FliptEd />
                proj2=<Easel />
            />
        </div>
    );
};

export default CPrompt;
