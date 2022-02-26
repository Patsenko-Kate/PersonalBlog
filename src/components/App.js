import React from 'react';
import Header from './Header.js';
import Intro from './Intro.js';
import Section from './Section.js';
import Accordion from './Accordion.js';
import Conclusion from './Conclusion.js';
import '../style/App.css'
import '../style/Container.css'

function App() {
    return(
        <div>
            <Header />
            <Intro />
            <Section />
            <Accordion />
            <Conclusion />
        </div>
    )
}

export default App;