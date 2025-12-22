import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './Experience.css'

function Experience({ theme }) {
    const experience = [
        {
            title: 'Software Engineer <MERN> ',
            company: ' Sunrise USA Organization ',
            company_href: 'https://sunrise-usa.org',
            date: '11/2025 – Present',
            location: 'Ramsey, NJ, USA',
            desc: [
                'Design and implement donation campaign websites using the MERN stack (MongoDB, Express, React, Node.js).',
                'Develop and integrate secure donation workflows using Qgiv with Bloomerang CRM.',
                'Developed RESTful APIs to handle CRUD operations, user authentication, and third-party API integration, improving performance by 20%.',
                'Optimize and maintain the organization’s main website, improving overall performance by ~35%.',
                'Maintain and optimize internal website performance, security, and content updates.',
                'Deploy updates to Microsoft Azure using CI/CD practices.',
                'Administer databases to enhance data accuracy and streamline operational workflows.',]
        },
        {
            title: 'Software Engineering Intern <JAVA>',
            company: 'Revature',
            company_href: 'https://www.revature.com',
            date: '08/2025 – 11/2025',
            location: 'Remote, VA, USA',
            desc: [
                'Completed an intensive full-stack development program focused on Java, Spring Boot, Hibernate, REST APIs, JavaScript, Angular, SQL, and Git/GitHub.',
                'Build and deploy full-stack applications following Agile/Scrum methodologies.',
                'Developed backend services with Java and Spring Boot, integrating relational databases via Hibernate/JPA, reducing query response times by 20%.',
                'Implement responsive front-end components using Angular and ensure seamless API integration.',
                'Applied MVC design pattern with Spring Boot to organize backend logic, improving maintainability and scalability of applications.',
                'Gain hands-on experience in unit testing (JUnit), version control (Git), and cloud deployment basics.',
                'Applied knowledge of data structures and design patterns to write efficient, maintainable, and scalable applications.']
        },
        {
            title: 'FrontEnd Developer <React>',
            company: 'Vica Web Solutions',
            company_href: 'https://vica.website/',
            date: '03/2024 - 4/2025',
            location: 'Damascus, Syria',
            desc: [
                'Built responsive single-page applications (SPAs) using HTML, CSS, JavaScript, and React.js, ensuring cross-device compatibility and improved performance.',
                'Collaborated with UX/UI designers, converting design prototypes (such as Figma) into fully functional and responsive web applications.',
                'Utilized Redux to manage complex application state, improving data flow and reducing bugs in React applications by 35%.',
                'Integrated and handled RESTful APIs to fetch and display dynamic data within web applications.',
                'Applied foundational Next.js features (SSR/SSG) to improve load times and SEO.',
                'Used Git and GitHub for version control, collaborating on features via pull requests and code reviews.',
            ]

        },
        // {
        //     title: 'Full Stack Developer',
        //     company: 'Focal X Agency',
        //     company_href: 'https://www.focal-x.com/',
        //     date: '06/2023 - 03/2024',
        //     location: 'Latakia, Syria',
        //     desc: [

        //     ]

        // },

        {
            title: 'Full Stack Developer <PHP + React>',
            company: 'Focal X Agency',
            company_href: 'https://www.focal-x.com/',
            date: '01/2023 - 03/2024',
            location: 'Latakia, Syria',
            desc: [
                'Utilized Laravel (PHP) and MVC design patterns to build backend services,reducing code duplication by 25%.',
                'Implemented responsive UI components using React.js and React Hooks, ensuring cross-browser compatibility and reducing rendering issues by 25%.',
                'Leveraged MongoDB for database management, designing schemas, and implementing data models with Mongoose.',
                'Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms. Produced websites compatible with multiple browsers.',
                'Developed and integrated RESTful APIs to enable seamless data exchange and improve communication between frontend and backend systems.',
                'Managed efficient SQL queries and data transport.',
                'Participated in daily stand-ups and sprint planning as part of Agile development methodology.',
                'Optimized site content for mobile devices using responsive design techniques.'
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