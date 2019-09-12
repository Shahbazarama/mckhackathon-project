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

        <Col sm={6}>
          <button className="btn btn-lg btn-danger btn-block" onClick={() => setSentimentalValue(sentimentalValue-1)}>
            negative
          </button>
        </Col>
        <Col sm={6}>
          <button className="btn btn-lg btn-success btn-block" onClick={() => setSentimentalValue(sentimentalValue+1)}>
            positive
          </button>
        </Col>

      </Row>
      <Row>
        <Col sm={6}>
          <Conversation sentimentalValue={sentimentalValue}/>
        </Col>
        <Col sm={2}>
          <img src="placeholderPerson.jpg" width="100%" alt="person" />
        </Col>
        <Col sm={4}>
          <Card>
            <CardBody>
              <CardTitle>Corban Caller</CardTitle>
              <CardText><small className="text-muted">(480) 555-5555</small></CardText>
              <CardText><u>Caller Notes:</u></CardText>
              <ul>
                <li>Perscriptions</li>
                <li>Quick requests</li>
                <li>Long term customer</li>
              </ul>

              <Button outline size="sm">Previous Call History</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
