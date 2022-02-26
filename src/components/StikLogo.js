import React from "react";
import Stik from '../images/stik_2.png';
import '../style/StikLogo.css'

function StikLogo() {
    return(
        <div className="stik__logo">
            <img className="stik__img" src={Stik} alt="" />
        </div>
    )
}

export default StikLogo;