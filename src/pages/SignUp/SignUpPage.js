import React, { useState } from "react";
import styled from "styled-components";
import SignUpImage from "../../images/svg-1.svg"; // Import the SVG image
import axios from "axios"; // Import axios for HTTP requests

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f9f9f9;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 40px; // Add margin to separate the form and image
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Heading = styled.h2`
  text-align: center; // Center the heading
  margin: 20px 0; // Add space above and below the heading
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff6347;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4b59f7;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0467fb;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.email && formValues.password) {
      try {
        const response = await axios.post(
          "http://localhost:5000/login", // Adjust the login API endpoint
          {
            email: formValues.email,
            password: formValues.password,
          }
        );
        console.log(response.data); // Handle success (e.g., store token, redirect)
      } catch (error) {
        console.error("There was an error logging in!", error);
      }
    } else {
      setErrors({
        ...errors,
        email: formValues.email ? "" : "Email is required",
        password: formValues.password ? "" : "Password is required",
      });
    }
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <Heading>Log In</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <ErrorMessage show={!!errors.email}>{errors.email}</ErrorMessage>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <ErrorMessage show={!!errors.password}>
            {errors.password}
          </ErrorMessage>
          <Button type="submit">Log In</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image src={SignUpImage} alt="Log In" />
      </ImageContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
