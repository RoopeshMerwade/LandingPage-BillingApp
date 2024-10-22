import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 100px 0;
  background: #f9f9f9;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5rem;
  color: #101522;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const ContactInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

export const ContactTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const ContactSection = styled.section`
  background: url("../../images/contact.jpg") no-repeat center center/cover;
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

const ContactInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

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
  background-color: #007bff;
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
