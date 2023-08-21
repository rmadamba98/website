import React from "react";
import "./fprompt.css";
import { Prompt } from "../../components";
import { Easel } from "../../containers";

const FPrompt = () => {
    return (
        <div className="rm__fprompt">
            <Prompt
                text="Did you know Ryan has a minor in Computing for Interactive Arts?"
                c1="UI/UX Design"
                desc1="Easel"
                c2="Augmented Reality"
                desc2="Maui AR"
                proj1=<Easel />
            />
        </div>
    );
};

export default FPrompt;
