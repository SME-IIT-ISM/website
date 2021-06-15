import React, { useState } from "react";
import { Alert } from "reactstrap";
import { MdSend } from "react-icons/md";

const { REACT_APP_SMTPJS_TOKEN, REACT_APP_EMAIL_HOST } = process.env;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("info");
  const [callbackMsg, setCallbackMsg] = useState(
    "This should not be visible, unless the Send button is clicked."
  );

  const onDismiss = () => setVisible(false);
  const successMsg = "Your message has been sent successfully...";
  const errorMsg =
    "!! An error occured while sending the message. Please try again !!";

  const onNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const onEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const onMessageChange = (event) => {
    const msg = event.target.value;
    setMsg(msg);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.Email.send({
      SecureToken: `${REACT_APP_SMTPJS_TOKEN}`,
      To: "smeiitismstudentchapter@gmail.com",
      From: `${REACT_APP_EMAIL_HOST}`,
      Subject: `${name} filled the contact form`,
      Body: `Name: ${name} <br />Email: ${email} <br />Message: <br />${msg}`,
    }).then((message) => {
      if (message === "OK") {
        setName("");
        setEmail("");
        setMsg("");
        setColor("success");
        setCallbackMsg(successMsg);
      } else {
        setColor("danger");
        setCallbackMsg(errorMsg);
      }
      setVisible(true);
    });
  };

  return (
    <div className="Form">
      <Alert color={color} isOpen={visible} toggle={onDismiss}>
        {callbackMsg}
      </Alert>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group my-2">
          <label htmlFor="name" className="card-title">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1" className="card-title">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message" className="card-title">
            Message
          </label>
          <textarea
            className="form-control"
            rows="5"
            value={msg}
            onChange={onMessageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 mb-2">
          Send <MdSend />
        </button>
      </form>
    </div>
  );
};

export default Form;
