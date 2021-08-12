import React from 'react';
import{Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/ShopPage/shoppage.component';
import Header from './Components/Header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.componemt.jsx';
import {auth} from './Firebase/firebase.utils';
const HatsPage =()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component ={HomePage}/>
      <Route  path='/hats' component ={ShopPage}/>
      <Route  path='/signin' component ={SignInAndSignUpPage}/>
    </Switch>
    </div>
  );
}}

export default App;
