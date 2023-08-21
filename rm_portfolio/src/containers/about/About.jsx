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
                desc="I am a Software Engineer based in Cerritos, CA. I love working in spaces where algorithmic thinking meets creativity."
                skills="HOBBIES: Bouldering, Hiking, Music Festivals, Trying New Food"
                link1="Resume"
                url1="https://tinyurl.com/3n7uhvp7"
                link2="GitHub"
                url2="https://github.com/rmadamba98"
                prompt=<APrompt />
            />
        </div>
    );
};

export default About;
