import './Hero.css'
import my_photo from './../../assets/images/personal_img.webp'

function Hero({ theme }) {
    return (
        <div className={`hero ${theme}`}>
            <div className='hey'>
                <h1>


                    <span>HEY!</span> I’m <span>Abdullah</span>,
                    Full Stack Web Developer with a Frontend focus.

                </h1>

                <p>Building modern web applications with clean code and great user experiences.
                </p>
                <a href="https://drive.google.com/file/d/1jsr16lqYK4KTz0xHHHry8wEqbsiTUD9w/view?usp=drivesdk">Show Resume</a>

            </div>
            <img src={my_photo} alt="" />

            <svg width="1366" height="460" viewBox="0 0 1366 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-30 295.676C-11.901 295.676 125.651 459 307.676 459C560.544 459 696.694 -135.974 1052.84 30.3421C1335.18 162.195 1459.29 176.303 1511 84.6028" stroke="#D3D5D6" />
            </svg>
            <svg width="1366" height="398" viewBox="0 0 1366 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-30 92.5986C-13.9695 105.078 125.651 397 307.676 397C560.544 397 738.063 -132.862 1094.21 33.4546C1376.55 165.308 1421.02 144.146 1511 76.8632" stroke="#D3D5D6" />
            </svg>

        </div>
    )
}

export default Hero