import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Home />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
        <h2 className="m-3">React Hoarder</h2>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
