import React from 'react';
import DemoUser from '../components/DemoUser';

const DemoUsers = () => {
  const users = [{
    name: 'Akash',
    about: 'Akash about',
    age: 55
  }, {
    name: 'Akash',
    about: 'Akash about',
    age: 55
  }]
  return (
    <div>
      <h1>Demo Users</h1>
      <DemoUser users={users}> </DemoUser>
    </div>
  );
};

export default DemoUsers;