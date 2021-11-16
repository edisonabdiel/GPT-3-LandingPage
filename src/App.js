import React from 'react';
//Custom Containers
import { Footer, Blog, Features, WhatGPT3, Header, Possibility } from './containers';
//Custom Components
import { CTA, Brand, Navbar } from './components';
//Styles
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            <h1>GTP-3</h1>
        </div>
    )
}

export default App;
