import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer--container container">
                <h1 className="footer--title">Hernandez</h1>

                <ul className="footer--list">
                    <li>
                        <a href="#about" className="footer--link">Sobre mi</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer--link">Proyectos</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer--link">Testimonios</a>
                    </li>
                </ul>

                {/*                 <div className="footer--social">
                    <a href="https://www.linkedin.com/in/sergiohdez-dev/" className="footer--social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/SergioHdezS" className="footer--social-link" target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div> */}
            </div>

        </footer>
    )
}

export default Footer