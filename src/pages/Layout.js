import React from "react";
import { Outlet, Router, useNavigate } from "react-router-dom";
import Contact from "../widgets/ContactInfo"
import { Home } from "./Home.js"
import GetPerson from "../Person";
import getProjectData from "../ProjectData";

function getTargetPos(target, scrollContainer) {
  var offsetTop = 0
  do {
    if (target == scrollContainer) break
    if (!isNaN(target.offsetTop))
      offsetTop += target.offsetTop
  } while (target = target.offsetParent)

  return offsetTop
}

function Layout({ width, height }) {

  const [unblur, changeUnblur] = React.useState(1)

  let navigate = useNavigate();
  function wrap(element, bottom) {
    // console.log(window.scrollY, getTargetPos(bottom, element))
    if (getTargetPos(bottom, element) <= window.scrollY) {
      navigate("/")
    }
  }

  React.useEffect(
    () => {
      var target = document.getElementById("bottom")
      var scrollContainer = document.getElementById("top")
      do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) break;
        if (!scrollContainer.scrollTop) scrollContainer.scrollTop = 1;
      } while (scrollContainer.scrollTop == 0);


      const handleScroll = () => {
        var unblurElt = document.getElementById("noise-tools-unblur")

        if (unblurElt != null) {
          var scr = Math.abs(getTargetPos(unblurElt, scrollContainer) - window.scrollY)
          if (scr <= 100) {
            changeUnblur(scr / 100)
          }
        }
        else if (unblurElt == null) {
          changeUnblur(1)
        }

        wrap(scrollContainer, target)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })


      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    []
  );



  return (
    <>
      <video id="background-video" autoPlay loop style={
        { filter: `blur(${unblur}vw) brightness(${100 - 60 * unblur}%)` }
      }>
        <source src="res/videos/CoolBackground.mp4" type="video/mp4" />
      </video>
      <div id="top"></div>
      <Outlet />
      <div id="bottom"></div>
      <Home person={GetPerson()} projects={getProjectData()} width={width} height={height} />
    </>
  );
};

export default Layout;