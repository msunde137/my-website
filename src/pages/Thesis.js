import React from "react";

export default function Thesis() {
    const imageStyle = { height: "200px", width: "auto" }
    const imageRowStyle = {
        display: "flex", flexDirection: "row", padding: "0px 10px", width: "100vm", justifyContent: "center", flexWrap: "wrap"
    }

    return (
        <div className="App">
            <h1>Shape Grammars for Archeological Reconstruction</h1>
            <div className="App-section">
                <h2>Abstract</h2>
                <p className="main-text">
                    Many ancient cities have been reduced to foundations, losing their architectural style and hints as to their usage. Today, Archaeologists use digital reconstructions to communicate their theories, but these models can often take a long time to fabricate, so the theories need to be well formed before they enter the stage of visualization. <em>Shape Grammar</em> are a tool that provides a tool for formalizing hypotheses visually, in a way that can be rapidly tested and compared. They do this by encoding similar complex forms- like the windows of buildings-to a set of text rules. When properly defined, these rules can define the look of an ancient city and can generate many stylistically similar variations of theory with little extra work. Shape grammars can start to bring to life long ruined cities, and help paint a more accurate picture of how their inhabitants might have lived.
                </p>
            </div>
            <div style={imageRowStyle}>
                <a className="menuItem1" style={{ width: "fit-content" }} href=".\res\documents\Procedural_architecture_using_grammars.pdf">View Full Paper</a>
                <a className="menuItem1" style={{ width: "fit-content" }} href="https://github.com/msunde137/Thesis-2022">Git Repository</a>
            </div>
            <div className="App-section">
                <h2>Examples</h2>
                <p className="main-text">
                    Shape grammars are a method of encoding shapes in text. Simple shape grammars can encode branching structures that look like trees. More complicated grammars can construct houses and other architecture.
                </p>
                <div style={imageRowStyle}>
                    <img src=".\res\images\Tree1-text.JPG" alt="shapeGrammarCode" style={imageStyle}></img>
                    <img src=".\res\images\Tree1.JPG" alt="treeModel" style={imageStyle}></img>
                </div>
                <div style={imageRowStyle}>
                    <img src="./res/images/House1.PNG" alt="houseModel1" style={imageStyle}></img>
                    <img src="./res/images/House.PNG" alt="houseModel" style={imageStyle}></img>
                </div>
            </div>
        </div >
    )
}