import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <div className="contact card">
        <Form />
        <MDBContainer className="map-container m-5">
          <MDBIframe
            height={300}
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.13244169905042!2d86.44100069931935!3d23.81436469595872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd1a93a872d5%3A0xa1548ad737490192!2zMjPCsDQ4JzUxLjgiTiA4NsKwMjYnMjcuOSJF!5e0!3m2!1sen!2sin!4v1622840483342!5m2!1sen!2sin"
          />
        </MDBContainer>
      </div>
    </div>
  );
};

export default Contact;
