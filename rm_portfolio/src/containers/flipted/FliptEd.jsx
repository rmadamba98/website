import React from "react";
import "./flipted.css";
import { Project } from "../../components";
import flipted from "../../assets/flipted.png";
import FPrompt from "../fprompt/FPrompt";

const FliptEd = () => {
    return (
        <div className="rm__flipted">
            <Project
                text="Here's one of Ryan's Web-Based Applications:"
                title="Learning Management System"
                subtitle="Flipt.Ed"
                photo=<img src={flipted} alt="flipted"></img>
                desc="flipt.Ed is a web-based learning management system based on gamification and mastery learning. 
                    flipt.Ed seeks to incorporate modern educational strategies into a learning platform for schools. 
                    These strategies chiefly include the concepts of gamification and mastery learning.
​                    Our application focuses on the student side of flipt.ED, providing a way for students to access 
                    and complete course content, and track their progress."
                skills="React, JavaScript, CSS, HTML, GraphQL API"
                link1="GitHub"
                url1="https://github.com/CPSECapstone/Flipted-Hydro"
                link2="Figma"
                url2="https://tinyurl.com/y2c2uyxk"
                prompt=<FPrompt />
            />
        </div>
    );
};

export default FliptEd;
