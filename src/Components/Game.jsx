import React from 'react';
import { Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Sentiment from './Sentiment.jsx';
import AdvancingText from './AdvancingText.jsx';
import Header from './Header.jsx'

export default function Game(){


  const scriptLines = [
    '<b>Employee:</b> <span style="color: green">Thank you</span> for calling Drug Support Program. This is Ace speaking, <span style="color: green">how may I help you?</span>',
'<b>Caller:</b> I am standing in line <span style="color: red">trying to get my drug</span> but the pharmacist says that I am <span style="color: red">not eligible</span>' +
' to receive my drug',
'<b>Employee:</b> <span style="color: green">I am sorry to hear that.</span> what is your name and patient number, so that I may <span style="color: green">help</span> you as' +
' effectively as possible',
'<b>Caller:</b> <span style="color:green">Thank you</span> . My name is Corban Caller and my number is 45893483.',
'<b>Employee:</b> Okay Corban, I see that you are currently ineligible because you were labeled as deceased, and that is clearly <span style="color: red">incorrect</span>. I am changing that right now.',
'<b>Employee:</b> I would like to stay on the line while you complete your order to make sure that it goes through correctly',
'<b>Caller:</b> <span style="color: green">Thank you</span>',
'<b>Caller:</b> Okay I have my prescription now. <span style="color:green">Thank you</span> for your <span style="color:green">help!</span>',
'<b>Employee:</b> <span style="color: green">My pleasure</span> have a <span style="color: green">wonderful</span> day'
  ]

  return (
    <div className="container">
      <Row>
        <Col className="text-center">
         <Header />
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Card>
            <CardImg top width="100%" src="ACESlogo.png" alt="employee" />
            <CardBody>
              <CardTitle>Ace Spade</CardTitle>
              <CardText><small className="text-muted">Ace's Credit Score: 750</small></CardText>

            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <AdvancingText msPerChar={30} lines={scriptLines} />
        </Col>

        <Col md={3}>
          <Card>
            <CardImg width="90%" height="75%" src="placeholderPerson.png" alt="person" />
            <CardBody>
              <CardTitle>Corban Caller</CardTitle>
              <CardText><small className="text-muted">(480) 555-5555</small></CardText>
              <CardText><u>Caller Notes:</u></CardText>
              <ul>
                <li>Prescriptions</li>
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
