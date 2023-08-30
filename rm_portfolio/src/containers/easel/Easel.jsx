import React from "react";
import "./easel.css";
import { Project } from "../../components";
import easel from "../../assets/easel.png";

const Easel = () => {
    return (
        <div className="rm__easel">
            <Project
                text="Check out this Case Study!"
                title="UX Case Study"
                subtitle="Easel Learning Management System"
                photo=<img src={easel} alt="easel"></img>
                desc="Easel is a modern User-Centered Learning Management System (LMS) aimed to facilitate remote 
                    learning at the collegiate level. With Easel, we aim to bring structure to the traditional 
                    LMS model and use user-centered design principles to give students peace of mind and allow 
                    them to stay on top of their academics at a time where it is increasingly difficult to do so."
                skills="SKILLS USED: AdobeXD, UX Research, Human-Centered Interface Design"
                link1="Case Study"
                url1="https://drive.google.com/file/d/1B_T_SVryws43AZAb0qWblRMfLTYey_r5/view"
                link2="Prototype"
                url2="https://xd.adobe.com/view/f422c8a9-c5df-40a4-8d79-337d21660fad-a171/grid/?hints=off"
            />
        </div>
    );
};

export default Easel;
