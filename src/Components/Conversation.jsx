import React from 'react'

export default function Conversation({ sentimentalValue }) {

  return (
    <>
    {( () => {
      switch(true) {
        case (sentimentalValue < 3):
          return <h1>Good luck</h1>;
        case (sentimentalValue < 5):
          return <h1>Be calm</h1>;
        case (sentimentalValue == 5):
          return <h1>Stay positive</h1>;
        case (sentimentalValue < 8):
          return <h1>Keep it up!</h1>;
        case (sentimentalValue > 7):
          return <h1>Great job!</h1>;
        default:
          return null;
      }
    })()}
    </>
  )
}
