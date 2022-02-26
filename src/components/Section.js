import React from "react";
import SectionHeader from './SectionHeader';
import Card from "./Card";
import '../style/Section.css'

function Section() {
    return(
        <section className="section">
            <div className="container">
                <SectionHeader />
                <Card />
            </div> 
        </section>
    )
}

export default Section;