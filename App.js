/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase'
import { View } from 'react-native';
import Header from './src/components/header.js'
import Button from './src/components/Button.js'
import Spinner from './src/components/Spinner.js'
import LoginForm from './src/components/LoginForm.js'

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {


    var config = {
      apiKey: "AIzaSyBZvkpeKjXDskHmJf5OGtfWwxpW-hTaV2k",
      authDomain: "auth-19b6c.firebaseapp.com",
      databaseURL: "https://auth-19b6c.firebaseio.com",
      projectId: "auth-19b6c",
      storageBucket: "auth-19b6c.appspot.com",
      messagingSenderId: "250458139993"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    console.log(this.state)
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={() => firebase.auth().signOut()} >
                Log out
        </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


// // <Button onPress={() => firebase.auth().signOut()}>
// Log Out
// </Button>