import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StatesList from './components/States/List';
import CitiesList from './components/Cities/List';

function App() {
  return (
    <Router>
      <div>
        <StatesList/>
        <Route path={`/cities/:stateId`} component={CitiesList}/>
      </div>
    </Router>
  );
}

export default App;
