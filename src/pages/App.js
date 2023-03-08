import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history"

import Layout from "./Layout.js";
import Home from "./Home.js";
import getProjectData from "../ProjectData.js"

const ProjectData = getProjectData()

const ScrollToTop = (props) => {
    const location = useLocation();
    React.useEffect(() => {
        window.history.scrollRestoration = "manual"
        document.getElementById("top").scrollIntoView();
    }, [location]);

    return <>{props.children}</>
};

export default function App({ person }) {
    const [width, setWindowWidth] = React.useState(0)
    const [height, setWindowHeight] = React.useState(0)
    const updateDimensions = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWindowWidth(width)
        setWindowHeight(height)
    }
    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])

    return (
        <BrowserRouter window={window}>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout width={width} height={height} />}>
                        <Route index element={<Home person={person} projects={ProjectData} width={width} height={height} />} />
                        {
                            ProjectData.map((project) => {
                                return (
                                    <Route path={project.link} element={<project.element width={width} height={height} />} />
                                )
                            })
                        }
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

// ReactDOM.render(<App />, document.getElementById("root"));