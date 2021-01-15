import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import SearchMovie from '../components/SearchMovie';

const MovieSearch = () => {

    return (
        <div>
            <Navbar />
            <SearchMovie />
        </div>
    );
}

export default MovieSearch;