import React from "react";
import "./project.css";

function Project(props) {
    return (
        <div className="rm__project">
            <div className="rm__project-header">{props.text}</div>
            <div className="rm__project-body">
                <div className="rm__project-body-title">
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                </div>
                <div className="rm__project-body-image">{props.photo}</div>
                <div className="rm__project-body-text">{props.desc}</div>
                <div className="rm__project-body-skills">{props.skills}</div>
                <div className="rm__project-body-links">
                    <button>{props.link1}</button>
                    <button>{props.link2}</button>
                </div>
            </div>
            <div className="rm__project-footer">{props.prompt}</div>
        </div>
    );
}

export default Project;
