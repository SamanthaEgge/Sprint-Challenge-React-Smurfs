import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Smurf from './Smurf';

class Smurfs extends Component {

  smur
  render() {
    return (
      <div className='smurf-content'>
        <h1>Smurf Village</h1>
        <div className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  removeSmurf={this.props.removeSmurf}
                />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
