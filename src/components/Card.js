import React from "react";
import Image1 from "../images/1.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"
import '../style/Card.css'

function Card() {
    return(
        <div className="card">
            <div className="card__item">
                <div className="card__img">
                    <img src={Image1} alt="" />
                </div>
                <div className="card__text">позитив</div>
            </div>
            <div className="card__item">
                <div className="card__img">
                    <img src={Image2} alt="" />
                </div>
                <div className="card__text">трудолюбие</div>
            </div>
            <div className="card__item">
                <div className="card__img">
                    <img src={Image3} alt="" />
                </div>
                <div className="card__text">доброта</div>
            </div>
        </div>
    )
}

export default Card;