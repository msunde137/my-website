import React from "react";

export default function NosieTools({ width, height }) {
    return (
        <div className="App">
            <h1>noise-tools</h1>
            <div className="App-section">
                <h2>About</h2>
                <p className="main-text">
                    This Package was designed with inspiration from <a className="text-link" href="https://www.youtube.com/@SebastianLague/" target="_blank">Sebastian Lague</a>. I used compute shaders to experiment with rendering simplex and perlin noise in 2D. The noise is generated with both hash tables and pseudorandom functions. I also designed a modular UI to manipulate and add different noise types together in realtime. Finally, I implemented the marching cube algorithm to make meshes out of textures.
                </p>
            </div>
            <div className="App-section">
                <div className="imageRowStyle">
                    <img className="imageStyle" src="./res/images/noise-tools1.jpg" alt="noise-tools-example"></img>
                    <img className="imageStyle" src="./res/images/noise-tools2.jpg" alt="noise-tools-example"></img>
                </div>
                <div className="imageRowStyle">
                    <img className="imageStyle" style={{ width: "300px", height: "auto" }} src="./res/images/noise-tools_menu2.JPG" alt="noise-tools-example"></img>
                    <img className="imageStyle" style={{ width: "300px", height: "auto" }} src="./res/images/noise-tools_menu1.JPG" alt="noise-tools-example"></img>
                </div>
            </div>
            <div id="noise-tools-unblur" style={{ height: height * .7 }}></div>
        </div>
    )
}