import React, { useState } from "react";
import "./about.css";
import { Project, Photo } from "../../components";
import { APrompt } from "../../containers";

import grad from "../../assets/grad.jpg";
import paris from "../../assets/paris.jpg";
import RM1 from "../../assets/RM1.jpg";
import { DndContext } from "@dnd-kit/core";

const photoData = [
    {
        id: "1",
        position: {
            x: 1470,
            y: -60,
        },
        image: (
            <div className="rm__about-image">
                <img src={paris} alt="paris"></img>
                <div className="rm__about-caption">Visiting Paris</div>
            </div>
        ),
    },
    {
        id: "2",
        position: {
            x: 1470,
            y: 550,
        },
        image: (
            <div className="rm__about-image">
                <img src={grad} alt="grad"></img>
                <div className="rm__about-caption">
                    Graduation from Cal Poly SLO
                </div>
            </div>
        ),
    },
    {
        id: "3",
        position: {
            x: 1010,
            y: 270,
        },
        image: (
            <div className="rm__about-image">
                <img src={RM1} alt="RM1"></img>
                <div className="rm__about-caption">
                    Top of Half Dome, Yosemite
                </div>
            </div>
        ),
    },
];

const About = () => {
    const [photos, setPhotos] = useState(photoData);

    function handleDragEnd(ev) {
        const photo = photos.find((x) => x.id === ev.active.id);
        photo.position.x += ev.delta.x;
        photo.position.y += ev.delta.y;
        const _photos = photos.map((x) => {
            if (x.id === photo.id) return photo;
            return x;
        });
        setPhotos(_photos);
    }

    return (
        <div className="rm__about">
            <DndContext onDragEnd={handleDragEnd}>
                <Project
                    text="Let me introduce you to Ryan!"
                    title="Ryan Laranang Madamba"
                    subtitle="Developer + Designer"
                    photo={photos.map((photo) => (
                        <Photo
                            styles={{
                                position: "absolute",
                                left: `${photo.position.x}px`,
                                top: `${photo.position.y}px`,
                            }}
                            key={photo.id}
                            id={photo.id}
                            image={photo.image}
                            text={photo.text}
                        />
                    ))}
                    photo2={photos.map((photo) => (
                        <Photo
                            styles={{
                                position: "absolute",
                                left: `${photo.position.x}px`,
                                top: `${photo.position.y}px`,
                            }}
                            key={photo.id}
                            id={photo.id}
                            image={photo.image}
                            text={photo.text}
                        />
                    ))}
                    photo3={photos.map((photo) => (
                        <Photo
                            styles={{
                                position: "absolute",
                                left: `${photo.position.x}px`,
                                top: `${photo.position.y}px`,
                            }}
                            key={photo.id}
                            id={photo.id}
                            image={photo.image}
                            text={photo.text}
                        />
                    ))}
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
            </DndContext>
        </div>
    );
};

export default About;
