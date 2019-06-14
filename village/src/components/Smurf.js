import React from 'react';

const Smurf = props => {
  const smurf = {props}
  console.log(smurf)
  const smurfId = props.id
  return (
      <div className="smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <button onClick={event => props.removeSmurf(event, smurfId)}>Remove Smurf</button>
        <button onClick={event => props.setUpdateFields(event, smurf)}>edit</button>
      </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

