import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 100px 0;
  background: #f9f9f9;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
`;

export const ContactHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5rem;
  color: #101522;
`;

// export const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 600px;
// `;

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

const ContactTextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  height: 150px;
`;
