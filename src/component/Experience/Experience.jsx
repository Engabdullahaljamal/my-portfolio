import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './Experience.css'

function Experience({ theme }) {
    const experience = [
        {
            title: 'FrontEnd Developer',
            company: 'Vica Web Solutions',
            company_href: 'https://vica.website/',
            date: '04/2024 - 1/2025',
            location: 'Damascus, Syria',
            desc: [
                'Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements.',
                'Continuously developing and managing single-page web applications with React.js.',
                'Developed reusable components using React framework.',
                'Translated detailed Figma designs into interactive and responsive web applications using React.js.',
                'Integrating and handling RESTful APIs to fetch and display dynamic data within web applications.',
                'Basic knowledge in using Next.js for frontend development, including server-side rendering and static site generation.',
            ]

        },
        {
            title: 'Full Stack Developer',
            company: 'Focal X Agency',
            company_href: 'https://www.focal-x.com/',
            date: '06/2024 - 12/2024',
            location: 'latakia, Syria',
            desc: [
                'ollaborated with a team of developers to build and maintain full-stack web applications using MongoDB, Express.js, React, and Node.js (MERN).',
                'Developed RESTful APIs to handle CRUD operations, user authentication, and third-party API integration, improving performance by 20%.',
                'Implemented responsive UI components using React.js and React Hooks, ensuring cross-browser compatibility and optimized rendering.',
                'Leveraged MongoDB for database management, designing schemas, and implementing data models with Mongoose.',
                'Enhanced backend performance by optimizing Express.js middleware and using Node.js to streamline server-side logic.',

            ]

        },

        {
            title: 'Backend Developer Intern',
            company: 'Focal X Agency',
            company_href: 'https://www.focal-x.com/',
            date: '02/2024 - 06/2024',
            location: 'latakia, Syria',
            desc: [
                ' Utilized Laravel framework, PHP, and MVC design patterns for backend development.',
                'Streamlined API integration for seamless communication between frontend and backend systems.',
                'Developed RESTful APIs that facilitated seamless data exchange between clients and servers in a distributed environment.',
                'Managed efficient SQL queries and data transport.',
                'Used Git and GitHub for version control, collaborating on features via pull requests and code reviews.',
                'Participated in daily stand-ups and sprint planning as part of Agile development methodology.'

            ]

        },
        {
            title: 'FrontEnd Developer Intern',
            company: 'Focal X Agency',
            company_href: 'https://www.focal-x.com/',
            date: '07/2023 - 02/2024',
            location: 'latakia, Syria',
            desc: [
                'Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms. Produced websites compatible with multiple browsers.',
                'Actively developing and maintaining single-page web applications using React.js.',
                'Worked closely with UX/UI designers to translate their designs into functional web applications.',
                'Collaborated with back-end developers to improve website functionality and integrate new features.',
                'Utilized version control systems such as Git to track changes throughout the development process.',
                'Optimized site content for mobile devices using responsive design techniques.',

            ]

        },
    ]
    return (
        <div className={`experience ${theme}`} id='experience'>

            <h5> Experience and Education</h5>
            <h2> Experience</h2>

            <div className='experience_card_container'>
                {
                    experience.map((e, i) => {
                        return <ExperienceCard theme={theme} experience={e} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Experience