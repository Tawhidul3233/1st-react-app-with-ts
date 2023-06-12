import React from 'react';
import User from '../components/User';

const Users = () => {
  return (
    <div>
      <p className='text-3xl font-bold underline  '>Users List</p>
      <User name='Md Rony' age={22} audilt={true} lang={['Bangla', 'English', 'Hindi']} > </User> <br />
      <User name='Md Akash' age={55} audilt={true} lang={['Bangla', 'English', 'Hindi']} > </User> <br />
      <User name='Nille' age={15} audilt={false} lang={['Bangla', 'English', 'Hindi']} > </User>
    </div>
  );
};

export default Users;