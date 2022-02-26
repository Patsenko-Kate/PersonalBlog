import React from "react";
import '../style/Intro.css'
import '../style/Btn.css'

function Intro() {
    return(
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h2 className="intro__suptitle">Привет! Я Катя</h2>
                    <div className="container__intro">
                        <h1 className="intro__title">
                            Твой репетитор по математике.
                             У моих занятий есть побочный
                             эффект: влюбленность в математику
                        </h1>
                        <a className="btn" href="#">Узнать больше</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;