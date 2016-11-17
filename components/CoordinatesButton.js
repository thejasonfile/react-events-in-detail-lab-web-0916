const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(){
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked(event){
    let coords = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(coords);
  }

  render(){
    return(
      <div>
        <button onClick={this.clicked} >Coordinates Button</button>
      </div>
    )
  }
}

module.exports = CoordinatesButton;