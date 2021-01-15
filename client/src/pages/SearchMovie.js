import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import SearchMovie from '../components/SearchMovie';

const MovieSearch = (props) => {

    const [searchValue, setSearchedTitles] = useState('');

    return (
        <div>
            <Navbar />
            <SearchInput searchValue={searchValue} setSearchedTitles={setSearchedTitles}/>
            <SearchMovie />
        </div>
    );
}

export default MovieSearch;