
import React, { useState } from 'react'

export default ({lines, msPerChar})=> {
    const [current, setCurrent] = useState(0);
    if (current < lines.length) {
        const nextTimeout = lines[current].length * msPerChar;
        setTimeout(()=>{
            setCurrent(current+1);
        }, nextTimeout);
    }

    return (
        <React.Fragment>
            <h5 style={{opacity: '0.3'}} className="prev" dangerouslySetInnerHTML={{__html: current > 1 ? lines[current-2] : ''}}></h5>
            <h5 style={{opacity: '0.7'}} className="curr" dangerouslySetInnerHTML={{__html: current > 0 ? lines[current-1] : ''}}></h5>
            <h5 className="next" dangerouslySetInnerHTML={{__html: lines[current]}}></h5>
        </React.Fragment>
    )
}