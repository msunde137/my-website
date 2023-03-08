import React from "react"
import Thesis from "./pages/Thesis.js"
import NoiseTools from "./pages/NoiseTools.js"

const ProjectData = [
    {
        id: 0,
        title: "Shape Grammars for Architectural Reconstruction",
        description: "How can we test hypotheses for the look and feel of ancient cities?",
        link: "/shape-grammars-for-architectural-reconstruction",
        element: Thesis,
        image: "./res/images/House1.PNG",
    },
    {
        id: 1,
        title: "noise-tools",
        description: "A Unity package for generating pseudorandom textures on the GPU",
        link: "/noise-tools",
        element: NoiseTools,
        image: "./res/images/noise-tools2.jpg"
    },
    {
        id: 2,
        title: "Ray Tracing",
        description: "A raytracer written in C++ using OpenGL and GLSL. Developed for a compouter graphics course.",
        link: "https://github.com/msunde137/raytracer",
        image: "./res/images/ray-tracer.JPG",
        newTab: true
    },
    {
        id: 3,
        title: "Nim",
        description: "The mathematical game of Nim implemented for my intro CS class using pygame.",
        link: "https://github.com/msunde137/nim",
        image: "./res/images/nim.JPG",
        newTab: true
    },
    {
        id: 4,
        title: "Particle Systems",
        description: "Particle system written in C++ using OpenGL. Developed for a compouter graphics course.",
        link: "https://github.com/msunde137/particles",
        image: "./res/images/particles.JPG",
        newTab: true
    },
];

export default function getProjectData() {
    return ProjectData;
}