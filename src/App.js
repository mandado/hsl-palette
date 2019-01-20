import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {[].map(color => (
          <div style={{backgroundColor: color, width: 32, height: 32}}></div>
        ))}
      </div>
    );
  }
}


export default App;
