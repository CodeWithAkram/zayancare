import React from 'react';
import Doctors from './component/Doctors';
import Footer from './component/Footer';
import Header from './component/Header';
import Health from './component/Health';
import Main from './component/Main';
import OurService from './component/OurService';
import './style.css';

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <OurService />
            <Doctors />
            <Health />
            <Footer />
        </>
    )
}

export default Home;
