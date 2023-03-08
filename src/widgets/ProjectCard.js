import React from "react"
import "./ProjectCard.css"
import { Link } from "react-router-dom";

export default function ProjectCard({ className, title, description, photo, link, newTab }) {
    const card = (
        <div>
            <img src={photo} alt={title}></img>
            <h3>{title}</h3>
            <div className="hr"></div>
            <p>{description}</p>
        </div>
    )
    return (
        <div className={className}>
            {
                newTab ?
                    <a href={link} className="projectCard" target="_blank">
                        <img src={photo} alt={title}></img>
                        <h3>{title}</h3>
                        <div className="hr"></div>
                        <p>{description}</p>
                    </a> :
                    <Link to={link} className="projectCard">
                        <img src={photo} alt={title}></img>
                        <h3>{title}</h3>
                        <div className="hr"></div>
                        <p>{description}</p>
                    </Link>
            }
        </div>
    )
}
