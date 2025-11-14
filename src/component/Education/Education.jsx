import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './Education.css'

function Education({ theme }) {
    const education = [
        {
            title: 'Master of Science in Computer Science ',
            company: 'Georgia Institute of Technology',
            company_href: 'https://www.gatech.edu',
            date: '01/2026',
            location: 'Online, GA, USA',
            desc: [
                'Starting Spring 2026 (Part Time)',
                'Focus: Machine Learning, Artificial Intelligence, and Data-Driven Systems.',
                'Advancing skills in algorithmic modeling, intelligent automation, and scalable software design.',
            

            ]

        },
        {
            title: 'Master of Science in Web Science',
            company: 'Syrian Virtual University',
            company_href: 'https://www.svuonline.org/en/program/mws',
            date: '03/2023 - 11/2025',
            location: 'latakia, Syria',
            desc: [
                'Focus: Web Development, Web Engineering, and Software Development Life Cycle (SDLC).',
                'Thesis: “Analyzing Cyber Attacks and Developing a Framework for Early Detection and Rapid Response using Machine Learning algorithms to classify and predict malicious network behavior.”',
                'GPA 3.28 / 4.0',

            ]

        },
        {
            title: "Bachelor's degree in Software Engineering",
            company: 'Tishreen University',
            company_href: 'https://tishreen.edu.sy/en/Faculty/Index/51/Faculty-of-Informatics-Engineering#:~:text=The%20Faculty%20of%20Informatics%20Engineering,pioneer%20in%20the%20field%20of',
            date: '01/2015 - 1/2021',
            location: 'latakia, Syria',
            desc: [
                "Holds the U.S. equivalent of a Bachelor's Degree in Information Systems from Educational Credential Evaluators (ECE).",
                "Graduation Project titled ' A system for monitoring patients' physiological conditions. ', System engineer.",
                'GPA 3.25 / 4.0',

            ]

        },

    ]
    return (

        <div className={`experience ${theme} `} id='education'>

            <h2> Education</h2>

            <div className='experience_card_container'>
                {
                    education.map((e, i) => {
                        return <ExperienceCard theme={theme} experience={e} education='education' key={i} />
                    })
                }
            </div>
        </div>


    )
}

export default Education