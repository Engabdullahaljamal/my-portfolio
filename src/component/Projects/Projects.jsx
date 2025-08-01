import MainButton from '../MainButton/MainButton'
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css'
import { GoArrowUpRight } from "react-icons/go";
import educational from './../../assets/images/educational.webp'
import little from './../../assets/images/little.webp'
import villa from './../../assets/images/villa.webp'
import dashboard from './../../assets/images/dashboard.webp'
import shoes from './../../assets/images/shoes.webp'
import institute from './../../assets/images/education_library.webp'
import crypto from './../../assets/images/crypto.webp'
import mobile from './../../assets/images/Phone.webp'
import Apartment from './../../assets/images/Apartment.webp'

function Projects({ theme }) {
    const button = {
        name: 'View Github ',
        icon: <GoArrowUpRight />,
        href: 'https://github.com/Engabdullahaljamal'
    }

    const card_info = [
        {
            img: educational,
            title: 'Educational Platform',
            desc_title: 'Html-Css3-React-Vite',
            href: 'https://engabdullahaljamal.github.io/Educational-platform/',
            desc: 'Created an educational platform using React.js with reusable components for easy scalability. Structured the project using Vite to ensure efficient development and performance optimization. Focused on maintainable code and intuitive user interaction'
        },
        {
            img: dashboard,
            title: 'Dashboard',
            desc_title: 'Html-Tailwind-React-Axios',
            href: 'https://github.com/Engabdullahaljamal/Dashboard.git',
            desc: 'Built responsive product management dashboard using React.js, Vite, and Tailwind CSS. Managed authentication workflows, CRUD operations, product search, and dark mode. Integrated react-toastify for real-time notifications and used Axios for seamless API communication.'
        },
        {
            img: villa,
            title: 'Villa',
            desc_title: 'Html-Css3-React-Vite',
            href: 'https://engabdullahaljamal.github.io/Task3_Villa/',
            desc: 'Designed and developed a multi-page villa sales website using Vite and Pure CSS. Built dynamic components, filter buttons, and a hero slider to enhance interactivity. Optimized for all screen sizes to provide a seamless browsing experience across devices.'
        },
        {
            img: Apartment,
            title: 'Apartment Sales',
            desc_title: 'Html-Css3-React-Vite',
            href: 'https://engabdullahaljamal.github.io/Apartment-Sales-Platform/',
            desc: 'Built a landing page for apartment sales using Vite and React. Managed dynamic content with components and props while styling with Pure CSS. Ensured seamless user experience with full responsiveness across devices.'
        },

        {
            img: shoes,
            title: 'shoes store',
            desc_title: 'Html-Css3-Vanilla javascript',
            href: 'https://engabdullahaljamal.github.io/shoe_store/',
            desc: 'Developed a dynamic shop page with JavaScript, featuring real-time product search and a functional shopping cart. Enabled users to add, remove, and manage items in their cart efficiently.'
        },
        {
            img: little,
            title: 'Little lemon restaurant',
            desc_title: 'Html-Css3-React-Vite',
            href: 'https://engabdullahaljamal.github.io/little-lemon/',
            desc: 'Developed a multi-page restaurant website using React and CSS, ensuring smooth navigation and consistent performance across devices. Optimized content for mobile compatibility and improved user engagement through responsive design. '
        },
        {
            img: mobile,
            title: 'mobile shop',
            desc_title: 'Html-Css3-React-Bootstrap',
            href: 'https://engabdullahaljamal.github.io/Mobile-Phone-store/',
            desc: 'Built a responsive multi-page mobile shop using React. Fetched product data from APIs to deliver dynamic content and seamless user interaction. Ensured smooth performance across devices with an engaging UI.'
        },
        {
            img: crypto,
            title: 'crypto login,sign up pages',
            desc_title: 'Html-Css3-React-Webpack',
            href: 'https://engabdullahaljamal.github.io/crypto_log_sign_pages/',
            desc: 'Developed login and signup pages for a crypto website using React.js. Focused on smooth user authentication and integration with crypto platforms to enhance security and user experience.'
        },
        {
            img: institute,
            title: 'Education institute',
            desc_title: 'Html-Css3',
            href: 'https://engabdullahaljamal.github.io/task4_2/',
            desc: ' fully responsive website designed using HTML5 and CSS3 to provide a seamless user experience across all devices,Optimized spacing and visual balance for readability.'
        },

    ]
    return (
        <div className={`projects ${theme}`} id='projects'>
            <div className='projects_title_container'>
                <div>
                    <p>Projects</p>
                    <h2>My Creative Works
                        Latest <span>Projects</span> </h2>
                </div>
                <MainButton button={button} />

            </div>
            <div className='projects_container'>
                {
                    card_info.map((c, i) => {
                        return <ProjectCard key={i} card_info={c} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects