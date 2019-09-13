import React from 'react'

export default function Conversation({ sentimentalValue }) {

  return (
    <>
    <h2 className="text-center">
    {( () => {
      switch(true) {
        case (sentimentalValue < 3):
          return "Calmly resolve the situation.";
        case (sentimentalValue < 5):
          return "Try your best to be understanding.";
        case (sentimentalValue == 5):
          return "Stay positive!";
        case (sentimentalValue < 8):
          return "Keep it up!";
        case (sentimentalValue > 7):
          return "Excellent job!";
        default:
          return null;
      }
    })()}
  </h2>
    </>
  )
}
