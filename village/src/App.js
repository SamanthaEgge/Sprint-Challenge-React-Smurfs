import React, { Component } from 'react';
import axios from 'axios'
import { Route, withRouter, Link } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }))
        console.log(response)
      })
      .catch(error => {
        console.error('Server error', error)
      })
  }

  addSmurf = (event, smurf) => {
    event.preventDefault();
    console.log('we hit addSmurf!')
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
        console.log('we in the .then!')
      })
      .catch(error => {
        console.error('Server error', error)
      })
  }

  removeSmurf = (event, smurfId) => {
    event.preventDefault();
    console.log(smurfId);
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {this.setState ({ smurfs: response.data }) })
      .catch(error => console.error('Server Error', error))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className='nav-wrapper'>
          <div className='nav-bar'>
            <div className='nav-title'>
              <h2>SMURFS BE HERE</h2>
            </div>
            <div className='nav-links'>
              <Link to='/' className='nav-link'>Home</Link>
              <Link to='/smurf-form' className='nav-link'>Add a Smurf</Link>
            </div>
          </div>
        </div>
        <div className='smurfs'>
        <Route exact path='/' 
          render={(props) => 
          <Smurfs {...props} smurfs={this.state.smurfs} removeSmurf={this.removeSmurf} />} />
        </div>

        <Route exact path='/smurf-form' 
          render={(props) => 
          <SmurfForm addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
