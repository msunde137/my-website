import React from "react"
import "./ContactInfo.css"
import { Link } from "react-router-dom"

export function ContactInfo({ socials, className }) {
    return (
        <div className={className}>
            <div className="contactInfo">
                {
                    socials.map((soc) => {
                        return (
                            <div key={soc.id}>
                                <a href={soc.link}>
                                    <img className="thumbnail" src={soc.src} alt={soc.alt}></img></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default function Contact({ socials }) {
    return (
        <div className="App-section fancybg">
            <div className="App-anchor" id="contact"></div>
            <h3>Interested in working with me?</h3>
            <p className="main-text c">
                Check out my Github, LinkedIn, or reach out over email!
            </p>
            <ContactInfo socials={socials} />
        </div>
    )
}