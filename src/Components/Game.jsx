import React from 'react';
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Sentiment from './Sentiment.jsx';
import AdvancingText from './AdvancingText.jsx';

export default function Game(){

  return (
    <div className="container">
      <Row>
        <Col className="text-center">
          <Sentiment />
        </Col>
        
      </Row>
      <Row>
        <Col className="text-center">
          
        </Col>

      </Row>
      <Row>

        {/* <Col md={6}>
          <button className="btn btn-lg btn-danger btn-block" onClick={() => setSentimentalValue(sentimentalValue-1)}>
            negative
          </button>
        </Col>
        <Col sm={6}>
          <button className="btn btn-lg btn-success btn-block" onClick={() => setSentimentalValue(sentimentalValue+1)}>
            positive
          </button>
        </Col> */}

      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <CardImg top width="100%" src="aces.png" alt="person" />
            <CardBody>
              <CardTitle>Aces Spade</CardTitle>
              <Button>Help</Button>

            </CardBody>
          </Card>
          <AdvancingText msPerChar={100} lines={[
            '<span style="color: green">Thank you</span> for calling First Street Pharmacy. This is Meghan speaking, <span style="color: green">how may I help you?</span>',
            'Hi, I need to renew my prescription <span style="color: orange">please.</span>',
            'Sure. What is your full name sir?',
            'It’s Alex Morgan. M-O-R-G-A-N.',
            'Okay I have Alex A-L-E-X, Morgan M-O-R-G-A-N.',
            'Yes',
            'Okay and what is your date of birth?',
            'December 19th, 1987.',
            'Okay, December 19th, 1987. Have you ordered with us before?',
            'Yes I have.',
            'Great. What are you looking to order?',
            'My Lasix prescription needs to be renewed.',
            'Okay. I pulled up your order history and it appears you had your Lasix prescription refilled one month ago.',
            'Yes.',
            'Okay. Is this the same prescription you would like to have refilled today?',
            'Yes it is. I want the pills though.',
            'Okay. Your last order was thirty 100 mg pills of the Lasix drug. Is this order correct?',
            'Yes.',
            'Okay. Please confirm the prescription number for me.',
          ]} />
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
