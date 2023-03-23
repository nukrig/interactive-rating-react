import "./Response.css";
import ResponseImg from "../images/illustration-thank-you.svg";
export function Response(props) {
  return (
    <div className="responseDiv">
      <img src={ResponseImg} alt="img" />
      <h3>You selected {props.rate} out of 5</h3>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
