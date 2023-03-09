const linkedin = "./res/thumbnails/linkedin-w.png"
const gmail = "./res/thumbnails/gmail-w.png"
const github = "./res/thumbnails/github-w.png"
const profile = "./res/images/profile.jpg"
const resume = "./res/thumbnails/document.png"
const syalomeeprofile = "./res/images/syalomee.jpg"

const macintyre = {
    profile: profile,
    name: "Macintyre Sunde",
    title: "Software Developer and Creative",
    bio: "Macintyre is a recent graduate from Haverford College with academic and personal experience in software development, computer graphics and technical art. They majored in Computer Science and took many courses in visual studies and traditional arts. They are driven by the mission to help people and the planet with their technical knowledge and creative spirit.",
    socials: [
        {
            link: "https://www.linkedin.com/in/macintyre-sunde-82b13b1a6/",
            src: linkedin,
            alt: "LinkedIn"
        },
        {
            link: "https://github.com/msunde137",
            src: github,
            alt: "GitHub",
        },
        {
            link: "mailto:imacsunde@gmail.com",
            src: gmail,
            alt: "Gmail"
        },
        {
            link: "./res/documents/Resume 2023.pdf",
            src: resume,
            alt: "Resume"
        }
    ]
}

export default function GetPerson() {
    return macintyre
}