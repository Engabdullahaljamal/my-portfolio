import './AboutMe.css'
import css_img from './../../assets/images/css.png'
import figma_img from './../../assets/images/figma.png'
import git_black_img from './../../assets/images/git_black.png'
import git_white_img from './../../assets/images/git_white.png'
import html_img from './../../assets/images/html5.png'
import react_img from './../../assets/images/react.png'
import SkillLine from '../SkillLine/SkillLine'


function AboutMe({ theme }) {
    const skills = [
        {
            skill_name: 'HTML5',
            skill_percent: '90%',
            skill_left: '88%',



        },
        {
            skill_name: 'CSS3',
            skill_percent: '85%',
            skill_left: '83%',


        },
        {
            skill_name: 'Javascript',
            skill_percent: '95%',
            skill_left: '93%',


        },
        {
            skill_name: 'React',
            skill_percent: '90%',
            skill_left: '88%',


        },

    ]
    return (


        <div className={`about_me ${theme}`} id='about_me'>
            <div className='circles'>
                <svg width="510" height="530" viewBox="0 0 510 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M326.879 189.966C364.635 229.241 388.169 275.842 395.716 319.417C403.262 362.995 394.816 403.495 368.69 430.672C342.563 457.85 303.631 466.636 261.739 458.786C219.849 450.936 175.051 426.454 137.296 387.179C99.5399 347.904 76.0055 301.303 68.4591 257.727C60.9122 214.15 69.3584 173.65 95.4848 146.472C121.611 119.294 160.544 110.508 202.436 118.359C244.325 126.209 289.123 150.691 326.879 189.966Z" stroke="#EBECF0" />
                    <path d="M349.539 166.393C387.295 205.668 410.829 252.27 418.376 295.845C425.923 339.423 417.477 379.922 391.35 407.1C365.224 434.278 326.291 443.064 284.399 435.213C242.51 427.363 197.712 402.882 159.956 363.607C122.2 324.332 98.6659 277.731 91.1195 234.155C83.5726 190.578 92.0188 150.078 118.145 122.9C144.272 95.7221 183.204 86.936 225.096 94.7866C266.986 102.637 311.784 127.118 349.539 166.393Z" stroke="#EBECF0" />
                    <path d="M372.2 142.821C409.955 182.096 433.49 228.697 441.036 272.273C448.583 315.85 440.137 356.35 414.011 383.528C387.884 410.706 348.951 419.492 307.06 411.641C265.17 403.791 220.372 379.31 182.616 340.034C144.861 300.759 121.326 254.158 113.78 210.583C106.233 167.005 114.679 126.506 140.806 99.3277C166.932 72.1498 205.865 63.3638 247.757 71.2143C289.646 79.0645 334.444 103.546 372.2 142.821Z" stroke="#EBECF0" />
                </svg>
                <img src={html_img} id='html_img' alt="" />
                <img src={figma_img} id='figma_img' alt="" />
                <img src={css_img} id='css_img' alt="" />
                {

                    (theme == 'light') ? <img src={git_black_img} id='git_img' alt="" /> : <img src={git_white_img} id='git_img' alt="" />
                }

                <img src={react_img} id='react_img' alt="" />
            </div>
            <div className='skills'>
                <h2>About Me </h2>
                <p>Proven Frontend Developer skilled in React.js, API integration, and responsive design. Experienced in collaborating with UX/UI teams to deliver innovative solutions that enhance web functionality and user experience. Proficient in Git and dedicated to staying updated with the latest frontend technologies.</p>
                {
                    skills.map((s,i) => {
                        return <SkillLine skill={s} theme={theme} key={i} />
                    })
                }

            </div>

        </div>

    )
}

export default AboutMe