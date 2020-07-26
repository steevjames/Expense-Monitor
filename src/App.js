import React from 'react';
import './App.css';
import Homepage from './Components/Prices_page/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path={"/"} component={Homepage}></Route>
      </div>
    </Router>
  );
}

export default App;
