import React from 'react';

const MyParagraph = (props) => {
  console.log('demoOutPut running');
  return <p>{props.children}</p>;
};

export default MyParagraph;
