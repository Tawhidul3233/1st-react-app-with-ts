import React from 'react';

type userType = {
  user: {
    name: string,
    about: string,
    lang: string[]
  }
}
const UserOb = ({ user }: userType) => {
  return (
    <div>
      <h2>Name : {user.name} </h2>
      <p> About : {user.about}  </p>
      <p> Lang : {user.lang.map((l, i) => <span key={i}> {l} </span>)} </p>
    </div>
  );
};

export default UserOb;