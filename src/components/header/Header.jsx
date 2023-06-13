import React, { useState } from 'react'
import './header.css'

const Header = () => {
    /* ====== Toggle Menu ====== */
    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav--logo">
                    Hernandez
                </a>

                <div className={Toggle ? "nav--menu show--menu" :
                    "nav--menu"}>
                    <ul className="nav--list grid">
                        <li className="nav--item">
                            <a href="#home" className="nav--link">
                                <i className="uil uil-estate nav--icon"></i> Inicio
                            </a>
                        </li>
                        <li className="nav--item">
                            <a href="#about" className="nav--link">
                                <i className="uil uil-user nav--icon"></i> Sobre mí
                            </a>
                        </li>
                        <li className="nav--item">
                            <a href="#skilss" className="nav--link">
                                <i className="uil uil-file nav--icon"></i> Habilidades
                            </a>
                        </li>
                        <li className="nav--item">
                            <a href="#services" className="nav--link">
                                <i className="uil uil-briefcase-alt nav--icon"></i> Servicios
                            </a>
                        </li>
                        <li className="nav--item">
                            <a href="#portfolio" className="nav--link">
                                <i className="uil uil-scenery nav--icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav--item">
                            <a href="#contact" className="nav--link">
                                <i className="uil uil-message nav--icon"></i> Contacto
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav--close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav--toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header