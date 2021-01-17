import React from 'react';

import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow'; // Slideshow component
import Discover from '../components/Discover'; // Discover component

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Slideshow />
            <Discover />
        </div>
    );
}

export default LandingPage;