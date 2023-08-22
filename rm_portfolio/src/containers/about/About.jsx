import React from "react";
import "./about.css";
import { Project } from "../../components";
import { APrompt } from "../../containers";
import RM1 from "../../assets/RM1.jpg";
import grad from "../../assets/grad.jpg";
import paris from "../../assets/paris.jpg";

const About = () => {
    return (
        <div className="rm__about">
            <Project
                text="Let me introduce you to Ryan!"
                title="Ryan Laranang Madamba"
                subtitle="Developer + Designer"
                photo=<img src={RM1} alt="RM1"></img>
                photo2=<img src={grad} alt="grad"></img>
                photo3=<img src={paris} alt="paris"></img>
                desc="I am a Software Engineer based in Cerritos, CA. I love working in spaces where algorithmic thinking meets creativity.
                    With a background rooted in Software Engineering and a minor in Computing for Interactive Arts, I've honed my skills in 
                    front-end development and am thrilled to be pursuing opportunities in this dynamic field. In every project I undertake, 
                    I bring a blend of analytical thinking and artistic sensibility. I'm meticulous about writing clean and maintainable code, 
                    ensuring that not only does the end product look fantastic, but it's also optimized for performance and scalability. 
                    With a strong foundation in HTML, CSS, and JavaScript, I thrive on learning and adapting to new technologies and frameworks 
                    that keep the front-end landscape ever-evolving."
                skills="HOBBIES: Bouldering, Hiking, Music Festivals, Trying New Food"
                link1="Resume"
                url1="https://tinyurl.com/59xsmdvk"
                link2="GitHub"
                url2="https://github.com/rmadamba98"
                prompt=<APrompt />
            />
        </div>
    );
};

export default About;
