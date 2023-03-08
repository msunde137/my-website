import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./App.css"
import NavBar from "../widgets/NavBar.js"
import ProjectCard from "../widgets/ProjectCard.js"
import Contact from "../widgets/ContactInfo.js"
import GetPerson from "../Person.js"

function About({ height }) {
  return (
    <div>
      <p className="">
        Macintyre Sunde is a recent graduate from Haverford College majoring in Computer Science with solid CS experiences. They are driven by the mission to help people and the planet with their technical knowledge. As a summer Machine Learning Intern, they implemented and compared 1D and 2D CNNs with traditional neural networks to differentiate users’ biometric mouse signatures, and the resulting 2D CNN outperformed the other techniques. For their thesis, they researched shape grammars and completed a version of L-Systems to generate raster images and implemented a scripting language for designing shape grammars. In the summer of 2022 they built a Unity package for manipulating pseudorandom functions for texture generation. In addition, they honed their collaboration and communication skills by serving as teaching assistant for a programming and computer hardware course at Haverford, holding office hours and communicating student comprehension to professors.
      </p>
    </div>
  )
}

function Work({ projects, height }) {
  return (
    <div className="App-section" style={{ height: height }}>
      <div className="App-anchor" id="work"></div>
      <h2>Work</h2>
      <div className="App-work">
        {
          projects.map((project) => {
            return (
              <ProjectCard title={project.title} description={project.description} photo={project.image} link={project.link} newTab={project.newTab} />
            )
          })
        }
      </div>
    </div>
  )
}

function IntroCard({ person, width, height }) {
  const small = (width < 1.5 * height) || (width < 800)
  return (
    <div className="App-header"
      style={{
        flexDirection: "column", alignItems: "center", justifyContent: "center",
        height: height
      }} >
      < div className="App-section" style={small ? { padding: "0px" } : { padding: "0px 200px" }}>
        <h1>{person.name}</h1>
        <p>{person.title}</p>
        <div className="hr"></div>
        <p className="App-subsection">{person.bio}</p>
      </div>
    </div >
  )
}

export function Home({ person, projects, width, height }) {
  return (
    <div className="App">
      <IntroCard person={person} width={width} height={height} />
      <main>
        <Work projects={projects} height={height} />
      </main>
      <div className="App-section fancybg">
        <div className="hr"></div>
        <Contact socials={GetPerson().socials} />
        <div className="hr"></div>
      </div>
    </div>
  )
}

export default Home