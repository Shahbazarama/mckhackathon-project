import React, { useState } from 'react'
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { FaFrownOpen, FaFrown, FaSmile, FaSmileBeam, FaLaugh } from 'react-icons/fa';
import Conversation from './Conversation.jsx'

export default function Game(){

  const [sentimentalValue, setSentimentalValue] = useState(5)

  return (
    <div className="container">
      <Row>
        <Col className="text-center">
          <h1>
            {( () => {
              switch(true) {
                case (sentimentalValue < 3):
                return <FaFrownOpen  style={{'color': 'red'}} />;
                break;
                case (sentimentalValue < 5):
                return <FaFrown style={{'color': 'red'}} />;
                break;
                case (sentimentalValue == 5):
                return <FaSmile style={{'color': 'gray'}} />;
                break;
                case (sentimentalValue < 8):
                return <FaSmileBeam style={{'color': 'green'}} />;
                break;
                case (sentimentalValue > 7):
                return <FaLaugh style={{'color': 'green'}} />;
                break;
                default:
                return null;
              }
            })()}
          </h1>

        </Col>
      </Row>
      <Row>

        <Col md={6}>
          <button className="btn btn-lg btn-danger btn-block" onClick={() => setSentimentalValue(sentimentalValue-1)}>
            negative
          </button>
        </Col>
        <Col md={6}>
          <button className="btn btn-lg btn-success btn-block" onClick={() => setSentimentalValue(sentimentalValue+1)}>
            positive
          </button>
        </Col>

      </Row>
      <Row>
        <Col md={6}>
          <Conversation sentimentalValue={sentimentalValue}/>
        </Col>
        <Col md={6}>
          <Card>
            <CardImg top width="100%" src="placeholderPerson.jpg" alt="person" />
            <CardBody>
              <CardTitle>Corban Caller</CardTitle>
              <CardSubtitle>(480) 555-5555</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Previous Call History</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
