import React from "react";
import "./csc.css";
import { Project } from "../../components";
import { Second } from "../../containers";
import csc from "../../assets/csc.png";

const CSC = () => {
    return (
        <Project
            text="Oh! You know Ryan, that’s great. Have you seen his most recent project?"
            title="Website Redesign"
            subtitle="Center for Supportive Communities"
            photo=<img src={csc} alt="csc"></img>
            desc="Experience the seamless transformation of the Center for Supportive Communities' online presence through my expert website redesign. Using Figma, I meticulously crafted a user-centric UX design, ensuring intuitive navigation and engaging visuals. Leveraging React for front-end development, I brought the design to life, delivering a responsive, dynamic, and modern website. Witness the synergy of design and technology that enhances user interaction and effectively communicates the organization's mission."
            skills="SKILLS USED: React, JS, CSS, HTML, Figma, JIRA"
            link1="GitHub"
            link2="Figma"
            prompt=<Second />
        />
    );
};

export default CSC;
