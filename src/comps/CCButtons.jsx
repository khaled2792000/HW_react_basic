import React, { Component } from 'react';

class ColorChanger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'white', 
    };
  }


  changeColor = (newColor) => {
    this.setState({ backgroundColor: newColor });
  }

  render() {

    const colors = [
      { name: 'Red', color: 'red' },
      { name: 'Green', color: 'green' },
      { name: 'Blue', color: 'blue' },
      { name: 'Yellow', color: 'yellow' },
      { name: 'Purple', color: 'purple' },
      { name: 'Black', color: 'black' },
      { name: 'Orange', color: 'orange' },
      { name: 'Pink', color: 'pink' },
    ];

    return (
      <div style={{ backgroundColor: this.state.backgroundColor, padding: '20px', textAlign: 'center' }}>
        {colors.map(({ name, color }) => (
          <button key={color} onClick={() => this.changeColor(color)} style={{ margin: '10px' }}>
            {name}
          </button>
        ))}
      </div>
    );
  }
}

export default ColorChanger;
