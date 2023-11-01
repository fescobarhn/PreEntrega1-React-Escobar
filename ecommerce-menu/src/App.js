import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
}

export default App;