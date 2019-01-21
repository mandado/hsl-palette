import React, { Component } from 'react';
import Structure, {Content} from './styles/Structure';
import Sidebar from './components/Sidebar';
import ColorsContext, {STATE} from './contexts/ColorsContext';
import Palette from './components/Palette';

class App extends Component {

  state = STATE;

  addColor = (color) => {
    this.setState(prev => ({
      ...prev, 
      colors: [...prev.colors, color]
    }));
  }

  removeColor = (id) => {
    this.setState(prev => ({
      ...prev, 
      selected: null,
      colors: prev.colors.filter(color => color.id !== id)
    }));
  }

  selectColor = (id) => {
    this.setState(prev => ({
      ...prev, 
      selected: prev.colors.find(color => color.id === id)
    }));
  }

  updateColor = (id, data = {}) => {
    const colors = this.state.colors;
    const indexColor = this.state.colors.findIndex(color => color.id === id);

    colors[indexColor] = data;

    this.setState(prev => ({
      ...prev, 
      colors
    }));
  }

  render() {
    return (
      <Structure>
        <ColorsContext.Provider value={{
          ...this.state,
          addColor: this.addColor,
          removeColor: this.removeColor,
          updateColor: this.updateColor,
          selectColor: this.selectColor
        }}>
          <Sidebar />
          <Content>
            <Palette />
          </Content>
        </ColorsContext.Provider>
      </Structure>
    );
  }
}


export default App;
