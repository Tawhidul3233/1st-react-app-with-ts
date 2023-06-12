import React from 'react';

type demoUsersType = {
  users: {
    name: string,
    about: string,
    age: number
  }[]
}

const DemoUser = ({ users }: demoUsersType) => {
  return (
    <div>
      {
        users.map((user,i) => <div key={i}>
          <h2> Name: {user.name}  </h2>
          <p> About: {user.about} </p>
          <p> Age: {user.age} </p>
        </div>)
      }

    </div>
  );
};

export default DemoUser;