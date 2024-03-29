import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('demoOutput running ');
  return <MyParagraph>{props.show ? 'this is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
