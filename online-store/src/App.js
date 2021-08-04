import React from 'react';
import{Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/ShopPage/shoppage.component';

const HatsPage =()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component ={HomePage}/>
      <Route  path='/hats' component ={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
