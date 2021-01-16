import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HelloWorld () {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-1">Hello World</h1>
        <hr/>
        <p>Goodbye</p>
      </Jumbotron>
    </Container>
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);