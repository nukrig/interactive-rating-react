import { useState } from "react";
import MyImage from "../images/icon-star.svg";
import "./Rating.css";
export function Rating(props) {
  

  const handleClick = (button) => {
    props.setRate(button);
  };
  const buttonsArr = [1, 2, 3, 4, 5];
  return (
    <div className="ratingDiv">
      <div className="starBackground">
        <img src={MyImage} />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttonsDiv">
        {buttonsArr.map((button, index) => {
          return (
            <button
              key={index}
              className="button"
              onClick={() => {
                handleClick(button);
              }}
              style={{ backgroundColor: props.rate === button ? "#FC7614" : "" }}
            >
              {button}
            </button>
          );
        })}
      </div>
      <button
        className="submit"
        onClick={() => {
          {
            props.rate !== 0 ? props.setIsSubmited(true) : null;
          }
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
