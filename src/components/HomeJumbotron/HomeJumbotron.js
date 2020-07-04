import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HomeJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to my portfolio.</h1>
          <p className="lead">I have spent more than 2 years studying and practicing front-end web development and just finished UCI's Full-Stack Web development program. Consider me for your web development role!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;