import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SearchMovie from './pages/SearchMovie'; 
import Wishlist from './pages/Wishlist';
import PurchaseHistory from './pages/PurchaseHistory';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import SearchInput from './components/SearchInput';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('oauthToken')
    
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
      <>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/search' component={SearchMovie} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/wishlist' component={Wishlist} />
          <Route exact path='/purchase-history' component={PurchaseHistory} />
          <Route render={() => <h1 className='display-2'>Oh No! This is not a page, please redirect back</h1>} />
        </Switch>
      </>
    </Router>

    </ApolloProvider>
  );
}

export default App;
