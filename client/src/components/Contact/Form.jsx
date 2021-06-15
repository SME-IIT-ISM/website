import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "reactstrap";
import { MdSend } from "react-icons/md";
import "./form.css";
const { REACT_APP_SMTPJS_TOKEN, REACT_APP_EMAIL_HOST } = process.env;

const initialState = { name: "", email: "", msg: "" };

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("info");
  const [callbackMsg, setCallbackMsg] = useState(
    "This should not be visible, unless the Send button is clicked."
  );

  const onDismiss = () => setVisible(false);
  const successMsg = "Your message has been sent successfully...";
  const errorMsg =
    "!! An error occured while sending the message. Please try again !!";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateInfo = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Name cannot be empty";
    }

    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.msg.trim()) {
      errors.msg = "Message cannot be empty";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSpinner(true);
      console.log("Sent");
      window.Email.send({
        SecureToken: `${REACT_APP_SMTPJS_TOKEN}`,
        To: "smeiitismstudentchapter@gmail.com",
        From: `${REACT_APP_EMAIL_HOST}`,
        Subject: `${values.name} filled the contact form`,
        Body: `Name: ${values.name} <br />Email: ${values.email} <br />Message: <br />${values.msg}`,
      }).then((message) => {
        if (message === "OK") {
          setValues(initialState);
          setColor("success");
          setCallbackMsg(successMsg);
        } else {
          setColor("danger");
          setCallbackMsg(errorMsg);
        }
        setVisible(true);
        setSpinner(false);
      });
    }
  }, [errors]);

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
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="form-input-errors">{errors.name}</p>}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="card-title">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form-input-errors">{errors.email}</p>}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message" className="card-title">
            Message
          </label>
          <textarea
            id="message"
            name="msg"
            className="form-control"
            rows="5"
            placeholder="Enter your message..."
            value={values.msg}
            onChange={handleChange}
          />
          {errors.msg && <p className="form-input-errors">{errors.msg}</p>}
        </div>
        <div className="mt-4 mb-2 d-flex align-items-center">
          <button type="submit" className="btn btn-primary mr-3">
            Send <MdSend />
          </button>
          &nbsp; &nbsp;
          {spinner && <Spinner color="primary" children="" />}
        </div>
      </form>
    </div>
  );
};

export default Form;
