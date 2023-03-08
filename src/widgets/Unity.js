import React, { Fragment, useNavigationContext } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./Unity.css"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { createMemoryHistory } from "history";

// var s_unload = null;
// export async function handleUnload() {
//     console.log("unloading")
//     await s_unload()
//     console.log("unloaded")
// }

export default function UnityGame({ className, gameFolder, loaderUrl }) {
    const { unityProvider, isLoaded, loadingProgression, unload, requestFullscreen } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: gameFolder + "/Build/webgl.data.gz",
        frameworkUrl: gameFolder + "/Build/webgl.framework.js.gz",
        codeUrl: gameFolder + "/Build/webgl.wasm.gz",
    });

    const fullscrenButton = `${gameFolder}/TemplateData/fullscreen-button.png`
    const unityLogo = `${gameFolder}/TemplateData/unity-logo-light.png`
    const webglLogo = `${gameFolder}/TemplateData/webgl-logo.png`
    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    async function handleUnload() {
        console.log("unloading")
        await unload()
        console.log("unloaded")
    }

    const beforeUnloadListener = async (event) => {
        // event.preventDefault();
        console.log("unloading")
        await unload()
        console.log("unloaded")
        // return event.returnValue = '';
    }


    // unity unloading
    React.useEffect(() => {
        console.log("mounted")
        window.addEventListener("beforeunload", beforeUnloadListener);

        window.addEventListener("hashchange", beforeUnloadListener)

        return () => {
            console.log("unmounted")
            window.removeEventListener("beforeunload", beforeUnloadListener);
            window.removeEventListener("hashchange", beforeUnloadListener);
        };
    }, []);

    function iconStyle(backgroundImg, button) {
        return ({
            backgroundImage: `url(${backgroundImg})`,
            background: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "50px",
            height: "50px",
            cursor: button ? "pointer" : ""
        })
    }

    return (
        <div className={className}>
            <div className="UContainer deep">
                <div className="container">
                    {isLoaded === false && (
                        // We'll conditionally render the loading overlay if the Unity
                        // Application is not loaded.
                        <div className="loading-overlay">
                            <p>Loading... ({loadingPercentage}%)</p>
                        </div>
                    )}
                    <Fragment>
                        <Unity className="unity" unityProvider={unityProvider} style={{ width: 960, height: 540 }} />
                    </Fragment>
                </div>
                <div style={{ display: "flex", flexDirection: "row", paddingTop: "10px" }}>
                    <button onClick={handleClickEnterFullscreen}
                        style={iconStyle(fullscrenButton, true)}>
                    </button>
                    <Link onClick={handleUnload} to=".." className="menuItem1">Unload</Link>
                    <img src={webglLogo} alt="webglLogo"
                        style={{ marginLeft: "auto" }}></img>
                </div>
            </div>
        </div>
    );
}