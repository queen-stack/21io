import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SearchMovie from './pages/SearchMovie'; 
import Wishlist from './pages/Wishlist';
import History from './pages/OrderHistory';
import './App.css';
// import SearchInput from './components/SearchInput';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    
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
          <Route exact path='/wishlist' component={Wishlist} />
          <Route exact path='/purchase-history' component={OrderHistory} />
          <Route render={() => <h1 className='display-2'>Oh No! This is not a page, please redirect back</h1>} />
        </Switch>
      </>
    </Router>

    </ApolloProvider>
  );
}

export default App;
