import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const ImageCap = (props) => {
  return (
    <div>
      <Card className="sg-card">
        <h2>{props.title}</h2>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardText className="sg-card-title"><small className="text-muted">{props.date}</small></CardText>
          <CardText>{props.text}</CardText>
          <Button className="sg-card-button" outline color="primary" href={props.link} target="_blank">Check it out!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCap;