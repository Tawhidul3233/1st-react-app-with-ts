import React from 'react';

const News = ({title, details}:{title: string; details:string}) => {
  return (
    <div>
      <h2 className=' font-semibold'> {title} </h2>
      <p> {details} </p>
    </div>
  );
};

export default News;