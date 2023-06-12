import React from 'react';
import News from '../components/News';

const NewsList = () => {
  return (
    <div>
      <h2 className=' mt-5 font-bold text-3xl underline' > News List </h2>
      <div>
        <News title='Bangladesh cricket team'  details='news details news ..........'> </News> <br />
        <News title='Bangladesh cricket team'  details='news details news ..........'> </News> <br />
        <News title='Bangladesh cricket team'  details='news details news ..........'> </News>
      </div>
    </div>
  );
};

export default NewsList;