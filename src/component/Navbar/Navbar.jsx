import { useEffect } from 'react';
import './Navbar.css'
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
function Navbar({ seTheme, theme }) {

    useEffect(() => {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userPrefersDark) {
            const moon_icon = document.getElementById('moon_icon')
            const sun_icon = document.getElementById('sun_icon')
            const moon_icon_2 = document.getElementById('moon_icon_2')
            const sun_icon_2 = document.getElementById('sun_icon_2')
            seTheme('dark');
            document.documentElement.classList.add('dark')
            moon_icon.style.display = 'none'
            sun_icon.style.display = 'block'
            moon_icon_2.style.display = 'none'
            sun_icon_2.style.display = 'block'
        } else {
            seTheme('light');
            moon_icon.style.display = 'block'
            sun_icon.style.display = 'none'
            moon_icon_2.style.display = 'block'
            sun_icon_2.style.display = 'none'
        }
    }, [])


    const dark_theme = () => {
        const moon_icon = document.getElementById('moon_icon')
        const sun_icon = document.getElementById('sun_icon')
        moon_icon.style.display = "none"
        sun_icon.style.display = "block"
        const moon_icon_2 = document.getElementById('moon_icon_2')
        const sun_icon_2 = document.getElementById('sun_icon_2')
        moon_icon_2.style.display = "none"
        sun_icon_2.style.display = "block"
        seTheme('dark')
        document.documentElement.classList.add('dark')
    }

    const light_theme = () => {
        const moon_icon = document.getElementById('moon_icon')
        const sun_icon = document.getElementById('sun_icon')
        moon_icon.style.display = "block"
        sun_icon.style.display = "none"
        const moon_icon_2 = document.getElementById('moon_icon_2')
        const sun_icon_2 = document.getElementById('sun_icon_2')
        moon_icon_2.style.display = "block"
        sun_icon_2.style.display = "none"
        seTheme('light')
        document.documentElement.classList.remove('dark')
    }
    const show_list = () => {
        const list = document.getElementById('nav_list')
        list.classList.toggle('display_toggle')

    }
    return (
        <div className={`my_navbar ${theme}`}>
            <div className='first_icon_container'>
                <h2>Abdullah </h2>

                <div className='first_icon'>
                    <IoMoon id='moon_icon_2' onClick={dark_theme} />
                    <MdSunny id='sun_icon_2' onClick={light_theme} />
                    <PiListBold onClick={show_list} />
                </div>


            </div>
            <h2 className='name'>Abdullah </h2>
            <ul id="nav_list" onClick={show_list}>
                <li> <a href="#">Home</a></li>
                <li><a href="#about_me">About me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#Certification">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='sec_icon'>
                <IoMoon id='moon_icon' onClick={dark_theme} />
                <MdSunny id='sun_icon' onClick={light_theme} />
            </div>

        </div>
    )
}

export default Navbar