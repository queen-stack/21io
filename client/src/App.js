import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
// import SearchInput from './components/SearchInput';

import Landing from './pages/Landing';
import SearchMovie from './pages/SearchMovie'; 

function App() {
  return (
      <Router>
      <>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/search' component={SearchMovie} />
          <Route render={() => <h1 className='display-2'>Oh No! This is not a page, please redirect back</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
