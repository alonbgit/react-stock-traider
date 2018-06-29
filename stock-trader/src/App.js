import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import StockTraider from './components/StockTraider/StockTraider';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <StockTraider/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
