import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './components/app.css';
import Homepage from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Homepage />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
