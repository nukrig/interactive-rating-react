import React, { useState } from "react";
import { Rating } from "../rating/Rating";
import { Response } from "../response/Response";
import "./App.css";
export function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rate, setRate] = useState(0);
  return (
    <div className="mainDiv">
      <div className="componentDiv">
        {isSubmited ? 
        <Response 
        isSubmited={isSubmited} 
        setIsSubmited={setIsSubmited}
        rate={rate} 
        setRate={setRate} /> 
        : 
        <Rating 
        isSubmited={isSubmited} 
        setIsSubmited={setIsSubmited}
        rate={rate} 
        setRate={setRate}/>}
      </div>
    </div>
  );
}
