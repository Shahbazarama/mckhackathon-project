import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { FaFrownOpen, FaFrown, FaSmile, FaSmileBeam, FaLaugh } from 'react-icons/fa';
import Conversation from './Conversation.jsx'

export default function Game(){

  const [sentimentalValue, setSentimentalValue] = useState(5)

  return (
    <div className="container">
      <Row>
        <Col className="text-center">
          <h5>
            {sentimentalValue}
          </h5>
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
        <Conversation sentimentalValue={sentimentalValue}/>
      </Row>
    </div>
  )
}
