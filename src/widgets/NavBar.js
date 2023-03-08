import React from "react"
import "./NavBar.css"
import { dsigmoid, sigmoid, lerp } from "../math.js"

function smoothScroll(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) break;
        if (!scrollContainer.scrollTop) scrollContainer.scrollTop = 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    const spd = 50

    var halfi = 0;
    const dist = Math.abs(scrollContainer.scrollTop - targetY)
    function scroll(i, sc, scrollTop, target, dist) {
        var sd = Math.abs(target - sc.scrollTop)
        if (sd < 1) return
        sc.scrollTop = lerp(scrollTop, target, sigmoid(2 * i - 4) * 1.1 - .02)
        // i += sd < dist / 2 ? lerp(0, 1, i) : lerp(1, 0, i)
        setTimeout(() => { scroll(i + .01, sc, scrollTop, target, dist) }, 1)
    }

    scroll(0, scrollContainer, scrollContainer.scrollTop, targetY, dist);

    // function scroll(c, a, b, i) {
    //     i++; if (Math.abs(c.scrollTop - targetY) < 1) return;
    //     c.scrollTop = a + (b - a) / spd * i;
    //     setTimeout(function () { scroll(c, a, b, i); }, 1);
    // }
    // // start scrolling
    // if (Math.abs(targetY - scrollContainer.scrollTop) > 10) {
    //     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    // }
}

export default function NavBar(
    { className, logo, title, pages }) {
    return (
        <div className={className}>
            {/* <div className="hr"></div> */}
            <div className="navBar">
                <div className="menu">
                    {pages.map((page) => {
                        return (
                            // <a key={page.key} href={page.url}
                            //     className="menuItem">
                            //     {page.name}
                            // </a>
                            <button onClick={() => smoothScroll(document.getElementById("work"))}> {page.name}</button>
                        )
                    })}
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}