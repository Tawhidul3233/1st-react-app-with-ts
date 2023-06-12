import React from 'react';
// string, number, boolean, null, void

type userProps = { name: string; age: number, audilt: boolean }

const User = (props: userProps) => {
  let aut = ''
  if (props.audilt) {
    aut = 'yes'
  } else {
    aut = 'no'
  }

  return (
    <div>
      <p> Name: {props.name} </p>
      <p> Age:  {props.age}</p>
      <p> Audilt: {aut} </p>
    </div>
  );
};

export default User;