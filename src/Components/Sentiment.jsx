
import React, {useState} from 'react'
import { FaFrownOpen, FaFrown, FaSmile, FaSmileBeam, FaLaugh } from 'react-icons/fa';
import Conversation from './Conversation';

export default function Sentiment({value}){

  return (
      <React.Fragment>
          <Conversation sentimentalValue={value}/>
          <h1 className="text-center">
        {( () => {
            switch(true) {
            case (value < 3):
                return <FaFrownOpen  style={{'color': 'red'}} />;
            case (value < 5):
                return <FaFrown style={{'color': 'red'}} />;
            case (value > 5):
                return <FaLaugh style={{'color': 'green'}} />;
            case (value > 8):
                return <FaSmileBeam style={{'color': 'green'}} />;
            default:
                return <FaSmile style={{'color': 'gray'}} />;
            }
        })()}
        </h1>
      </React.Fragment>

  )
}
