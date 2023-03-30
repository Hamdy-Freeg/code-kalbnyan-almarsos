import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';

import './Error.css';

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.text}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
}

function Error(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          text={props.text}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}

export default Error;
