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
                <div className="rm__project-body-image">
                    {props.photo2}
                    {props.photo}
                    {props.photo3}
                </div>
                <div className="rm__project-body-text">{props.desc}</div>
                <div className="rm__project-body-skills">{props.skills}</div>
                <div className="rm__project-body-links">
                    <a href={props.url1} target="_blank">
                        <button>{props.link1}</button>
                    </a>
                    <a href={props.url2} target="_blank">
                        <button>{props.link2}</button>
                    </a>
                </div>
            </div>
            <div className="rm__project-footer">{props.prompt}</div>
        </div>
    );
}

export default Project;
