import React from "react";
import "./project.css";

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

function Project(props) {
    return (
        <div className="rm__project">
            <FadeInSection>
                <div className="rm__project-body">
                    <div className="rm__project-image">
                        {props.photo2}
                        {props.photo3}
                        {props.photo}
                    </div>
                    <div className="rm__project-body-title">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </div>

                    <div className="rm__project-body-text">{props.desc}</div>
                    <div className="rm__project-body-skills">
                        {props.skills}
                    </div>
                    <div className="rm__project-body-links">
                        <a href={props.url1} target="_blank" rel="noreferrer">
                            <button>{props.link1}</button>
                        </a>
                        <a href={props.url2} target="_blank" rel="noreferrer">
                            <button>{props.link2}</button>
                        </a>
                    </div>
                </div>
            </FadeInSection>
            <div className="rm__project-footer">{props.prompt}</div>
        </div>
    );
}

export default Project;
