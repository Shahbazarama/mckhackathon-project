
import React, {useState} from 'react'
import { FaFrownOpen, FaFrown, FaSmile, FaSmileBeam, FaLaugh } from 'react-icons/fa';
import Conversation from './Conversation';

export default function Sentiment({value}){
    const [sentimentalValue, setSentimentalValue] = useState(5)
    setTimeout(()=> setSentimentalValue(Math.floor(Math.random() * 10) + 1), 2000);
  return (
      <React.Fragment>
          <Conversation sentimentalValue={sentimentalValue}/>
          {/* <img src="ACESlogo.png" width="50px" height="50px" className="float-left"/> */}
          <h1>
        {( () => {
            switch(true) {
            case (sentimentalValue < 3):
                return <FaFrownOpen  style={{'color': 'red'}} />;
            case (sentimentalValue < 5):
                return <FaFrown style={{'color': 'red'}} />;
            case (sentimentalValue > 5):
                return <FaLaugh style={{'color': 'green'}} />;
            case (sentimentalValue > 8):
                return <FaSmileBeam style={{'color': 'green'}} />; 
            default:
                return <FaSmile style={{'color': 'gray'}} />;
            }
        })()}
        </h1>
      </React.Fragment>
        
  )
}
