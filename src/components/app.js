import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Holly Baker</h1>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}
