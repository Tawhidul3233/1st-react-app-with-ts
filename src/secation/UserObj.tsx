import React from 'react';
import UserOb from '../components/UserOb';

const UserObj = () => {
  const user1 = {
    name: 'Akash',
    about: 'Akash about',
    lang: ['Bangla', 'English', 'Hindi']
  }
  const user2 = {
    name: 'Me',
    about: 'Me about',
    lang: ['Bangla', 'English', 'Hindi']
  }
  return (
    <div>
      <h1>User Obj</h1>
      <UserOb user={user1}>  </UserOb> <br />
      <UserOb user={user2}> </UserOb>
    </div>
  );
};

export default UserObj;