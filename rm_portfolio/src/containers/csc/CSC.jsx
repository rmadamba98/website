import React from "react";
import "./csc.css";
import { Project } from "../../components";
import csc from "../../assets/csc.png";
import CPrompt from "../cprompt/CPrompt";

const CSC = () => {
    return (
        <div className="rm__csc">
            <Project
                text="Have you seen Ryan's most recent project?"
                title="Website Redesign"
                subtitle="Center for Supportive Communities"
                desc="Experience the seamless transformation of the Center for Supportive Communities' online presence through my expert website redesign. Using Figma, I meticulously crafted a user-centric UX design, ensuring intuitive navigation and engaging visuals. Leveraging React for front-end development, I brought the design to life, delivering a responsive, dynamic, and modern website. Witness the synergy of design and technology that enhances user interaction and effectively communicates the organization's mission."
                skills="SKILLS USED: React, JS, CSS, HTML, Figma, JIRA"
                link1="GitHub"
                url1="https://github.com/rmadamba98/csc_web"
                link2="Figma"
                url2="https://tinyurl.com/4682cp7d"
                prompt=<CPrompt />
                photo=<img src={csc} alt="csc"></img>
            />
        </div>
    );
};

export default CSC;
