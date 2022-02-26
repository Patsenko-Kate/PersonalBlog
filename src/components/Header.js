import React from "react";
import logo__img from "../images/stik_1.png"
import '../style/Header.css'

function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img className="logo__img" src={logo__img} alt="" />
                    </div>

                    <nav className="nav">
                        <a className="nav__link" href="#">о себе</a>
                        <a className="nav__link" href="#">услуги</a>
                        <a className="nav__link" href="#">контакты</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;