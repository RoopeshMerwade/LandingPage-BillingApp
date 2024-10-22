import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const ContactSection = styled.section`
  background: url("") no-repeat center center/cover;
  padding: 50px 0;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactSubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// const ContactInput = styled.input`
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

const ContactTextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #101522;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0467fb;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ContactUs = () => {
  return (
    <>
      <GlobalStyle />
      <ContactSection>
        <Container>
          <ContactWrapper>
            <ContactHeading>Contact Us</ContactHeading>
            <ContactSubHeading>We'd love to hear from you!</ContactSubHeading>
            <ContactForm>
              <ContactInput type="text" placeholder="Your Name" required />
              <ContactInput type="email" placeholder="Your Email" required />
              <ContactTextArea placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
            </ContactForm>
            <ContactInfo>
              <p>Phone: (91) 9481311172</p>
              <p>Address: BTM Layout 1st Stage , Bengaluru 560068</p>
            </ContactInfo>
          </ContactWrapper>
        </Container>
      </ContactSection>
    </>
  );
};

export default ContactUs;
