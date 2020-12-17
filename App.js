import React, { Component } from 'react';
import {AuthProvider} from './src/provider/AuthProvider';
import AppStack from './src/stack/AppStack';

export default class App extends Component {
  
  constructor(properties) {
    super(properties);
  }

  render(){
    return (
      <AuthProvider>
        <AppStack/>
      </AuthProvider>
    );
  }
}