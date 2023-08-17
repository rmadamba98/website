import React from "react";
import "./about.css";
import { Project } from "../../components";
import { APrompt } from "../../containers";

const About = () => {
    return (
        <Project
            text="Let me introduce you to Ryan!"
            title="Ryan Laranang Madamba"
            subtitle="Developer + Designer"
            desc="I am a Software Engineer based in Cerritos, CA. I love working in spaces where algorithmic thinking meets creativity."
            prompt=<APrompt />
        />
    );
};

export default About;
