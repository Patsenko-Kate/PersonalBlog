import React from "react";
import Logo from '../images/stik_3.png'
import '../style/Conclusion.css'
import '../style/Logo.css'

function Conclusion() {
    return(
        <div className="concl">
            <div className="container">
                <div className="concl__inner">
                    <h2 className="concl__suptitle">Как со мной связаться?</h2>
                    <div className="btn_inner">
                        <a className="btn" href="#">Инстаграм</a>
                        <a className="btn" href="#">Вконтакте</a>
                        <a className="btn" href="#">Ютуб</a>
                    </div>
                    <div className="container__concl">
                        <h1 className="concl__title">Записаться на пробный урок</h1>
                        <h3 className="text__concl">Имя</h3>
                        <h3 className="text__concl">Фамилия</h3>
                        <h3 className="text__concl">Email</h3>
                        <a className="btn" href="#">Отправить</a>
                    </div>
                </div>
                <div className="logo">
                    <img className="logo__stik" src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Conclusion;