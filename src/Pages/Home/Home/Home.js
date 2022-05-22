import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import OurTeam from '../OurTeam/OurTeam';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <main>
            <Banner/>
            <BusinessSummary/>
            <Reviews/>
            <OurTeam/>
            <Contact/>
        </main>
    );
};

export default Home;