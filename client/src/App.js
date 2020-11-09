import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CityResults from './pages/CityResults';
import CityScores from './components/ScoreCard';

function App() {
  return (
    <>
     <CityScores/>

     <Router>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Home" component={ Home } />
        <Route exact path="/CityResults" component={ CityResults } />
        <Route exact path="/Favorites" component={ Favorites } />
    </Router>
    </>
  );
}



export default App;
