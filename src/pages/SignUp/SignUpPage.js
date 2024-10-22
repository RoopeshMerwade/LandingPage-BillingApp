import React, { useState } from "react";
import styled from "styled-components";
import { signUpForm } from "./Data";
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

const LoginOption = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 0.875rem;
`;

const LoginLink = styled.a`
  color: #4b59f7;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formValues.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!formValues.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      valid = false;
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/signup",
          formValues
        );
        console.log(response.data);
      } catch (error) {
        console.error("There was an error creating the user!", error);
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Validate only email and password for login
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

  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <Heading>{showLogin ? "Log In" : "Sign Up"}</Heading>
        <Form onSubmit={handleSubmit}>
          {showLogin ? (
            <>
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
            </>
          ) : (
            <>
              <Input
                type={signUpForm.username.type}
                placeholder={signUpForm.username.placeholder}
                name="username"
                value={formValues.username}
                onChange={handleChange}
                required={signUpForm.username.required}
              />
              <ErrorMessage show={!!errors.username}>
                {errors.username}
              </ErrorMessage>
              <Input
                type={signUpForm.email.type}
                placeholder={signUpForm.email.placeholder}
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required={signUpForm.email.required}
              />
              <ErrorMessage show={!!errors.email}>{errors.email}</ErrorMessage>
              <Input
                type={signUpForm.password.type}
                placeholder={signUpForm.password.placeholder}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required={signUpForm.password.required}
              />
              <ErrorMessage show={!!errors.password}>
                {errors.password}
              </ErrorMessage>
              <Input
                type={signUpForm.confirmPassword.type}
                placeholder={signUpForm.confirmPassword.placeholder}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required={signUpForm.confirmPassword.required}
              />
              <ErrorMessage show={!!errors.confirmPassword}>
                {errors.confirmPassword}
              </ErrorMessage>
              <Button type="submit">{signUpForm.buttonLabel}</Button>
            </>
          )}
        </Form>

        <LoginOption>
          {showLogin ? "Don't have an account?" : "Already have an account?"}
          <LoginLink href="#" onClick={toggleForm}>
            {showLogin ? "Sign Up" : "Log In"}
          </LoginLink>
        </LoginOption>
      </FormContainer>
      <ImageContainer>
        <Image src={SignUpImage} alt="Sign Up" />
      </ImageContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
