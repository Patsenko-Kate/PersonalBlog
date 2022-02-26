import React from "react";
import AccIcon1 from '../images/services/photography.png';
import AccIcon2 from '../images/services/creativity.png';
import AccIcon3 from '../images/services/webdesign.png';
import MyFoto from '../images/me.png';
import StikLogo from "./StikLogo";
import SectionHeader2 from "./SectionHeader2";
import '../style/WeDo.css'
import '../style/Accordion.css'

function Accordion() {
    return(
        <div className="section section--fon">
            <div className="container">
                <StikLogo />
                <SectionHeader2 />
                <div className="wedo">
                    <div className="wedo__item">
                        <img className="wedo__img" src={MyFoto} alt="" />
                    </div>
                    <div className="wedo__item">
                        <div className="accordion">
                            <div className="accordion__item">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={AccIcon1} alt="" />
                                    <div className="accordion__title">индивидуальные занятия</div>
                                </div>
                                <div className="accordion__text">
                                    TextTextTextText TextTextTextTextText
                                     TextTextTextTextTextText TextTextTextTextT
                                     extText TextTextTextText TextTextTextTextText
                                     TextText TextTextTextTe xtTextText TextText
                                </div>
                            </div>
                            <div className="accordion__item active">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={AccIcon2} alt="" />
                                    <div className="accordion__title">Занятия в мини-группах</div>
                                </div>
                                <div className="accordion__text">
                                    Такой формат отлино подходит для тех, 
                                    кто любит работать в команде! Здоровая конкурецния, 
                                    поддержка других ребят и моя постоянная поддержка!
                                </div>
                            </div>
                            <div className="accordion__item">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={AccIcon3} alt="" />
                                    <div className="accordion__title">онлайн курс</div>
                                </div>
                                <div className="accordion__text">
                                    TextTextTextText TextTextTextTextText
                                     TextTextTextTextTextText TextTextTextTextT
                                     extText TextTextTextText TextTextTextTextText
                                     TextText TextTextTextTe xtTextText TextText
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Accordion;