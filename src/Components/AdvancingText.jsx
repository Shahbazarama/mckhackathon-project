import React, { useState } from 'react'
import Sentiment from './Sentiment.jsx'

export default ({lines, msPerChar})=> {
    const [current, setCurrent] = useState(0);
    const sentimentValues = [5, 2, 4, 5, 4, 6, 9, 9, 9]
    if (current < lines.length) {
        const nextTimeout = lines[current].length * msPerChar;
        setTimeout(()=>{
            setCurrent(current+1);
        }, nextTimeout);
    }

    return (
        <>
          <Sentiment value={sentimentValues[current]}/>
          <h5 className="next" dangerouslySetInnerHTML={{__html: lines[current]}}></h5>
          <h5 style={{opacity: '0.8'}} className="prev" dangerouslySetInnerHTML={{__html: current > 0 ? lines[current-1] : ''}}></h5>
          <h5 style={{opacity: '0.7'}} className="prev" dangerouslySetInnerHTML={{__html: current > 1 ? lines[current-2] : ''}}></h5>
          <h5 style={{opacity: '0.5'}} className="curr" dangerouslySetInnerHTML={{__html: current > 2 ? lines[current-3] : ''}}></h5>
          <h5 style={{opacity: '0.4'}} className="prev" dangerouslySetInnerHTML={{__html: current > 3 ? lines[current-4] : ''}}></h5>
          <h5 style={{opacity: '0.4'}} className="curr" dangerouslySetInnerHTML={{__html: current > 4 ? lines[current-5] : ''}}></h5>
          <h5 style={{opacity: '0.4'}} className="prev" dangerouslySetInnerHTML={{__html: current > 5 ? lines[current-6] : ''}}></h5>
          <h5 style={{opacity: '0.4'}} className="curr" dangerouslySetInnerHTML={{__html: current > 6 ? lines[current-7] : ''}}></h5>
          <h5 style={{opacity: '0.3'}} className="prev" dangerouslySetInnerHTML={{__html: current > 7 ? lines[current-8] : ''}}></h5>
          <h5 style={{opacity: '0.3'}} className="curr" dangerouslySetInnerHTML={{__html: current > 8 ? lines[current-9] : ''}}></h5>
        </>
    )
}
