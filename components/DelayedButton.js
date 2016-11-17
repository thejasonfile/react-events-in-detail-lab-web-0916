const React = require('react');

class DelayedButton extends React.Component {
  constructor(){
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked(event){
    debugger;
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render(){
    return(
      <div>
        <button onClick={this.clicked}>Delayed Button</button>
      </div>
    )
  }
}

module.exports = DelayedButton;