import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  forSubmit = (event, smurf) => {
    this.props.addSmurf(event, this.state.smurf)
    console.log(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState(prevState => ({ smurf: {...prevState.smurf, [event.target.name]: event.target.value} }))
    console.log(event.target.value)
    console.log(this.state.smurf)
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.forSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
