import React from 'react';

type userType = {
  name: string,
  about: string,
  lang: string[]
}
const UserOb = ({ name, about, lang }: userType) => {
  return (
    <div>
      <h2>Name : {name} </h2>
      <p> About : {about}  </p>
      <p> Lang : {lang?.map((l, i) => <span key={i}> {l} </span>)} </p>
    </div>
  );
};

export default UserOb;