import React from "react"
import UnityGame, { handleUnload } from "../widgets/Unity"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./ProjectPage.css"
import "../widgets/NavBar.css"


export default function ApplicationPage({ title, description, appParams }) {

    return (
        <div className="App">
            <div className="App-nav fancybg">
                <div className="navBar">
                    <Link to="/" className="menuItem1">Home</Link>
                    <h1 className="title" style={{ marginLeft: "auto" }}>{title}</h1>
                </div>
                <div className="hr"></div>
            </div>
            {/* <div className="hr"></div> */}
            {appParams.type === "unity" && <UnityGame className="application" gameFolder={appParams.gameFolder} loaderUrl={appParams.loaderUrl} />}
            {/* <div className="hr"></div> */}
            <h2>Description</h2>
            <p className="deep-y main-text">{description}</p>
            {/* <div className="hr"></div> */}
        </div>
    )
}