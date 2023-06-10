import React from 'react';
// string, number, boolean, null, void

const User = (props: { name: string; age: number; audilt: boolean }) => {
  let aut = ''
  if (props.audilt) {
    aut = 'yes'
  } else {
    aut = 'no'
  }

  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age:  {props.age}</p>
      <p>Audilt: {aut} </p>
    </div>
  );
};

export default User;