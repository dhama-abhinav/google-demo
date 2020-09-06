import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route ,Switch } from 'react-router-dom'
import { Home } from './Home.';
import {SearchPage} from './SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          {/* <h2>search page</h2> */}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
     {/* <Home /> */}
    </div>
  );
}

export default App;
