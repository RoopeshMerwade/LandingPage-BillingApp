import React, { useState } from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCutDiamond, GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import axios from "axios";

const PricingSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;

const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;

const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

const LoginContainer = styled.div`
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 20px 0;
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const Pricing = () => {
  const [role, setRole] = useState(null);
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
          `http://localhost:5000/${role}-login`,
          {
            email: formValues.email,
            password: formValues.password,
          }
        );
        console.log(response.data); // Handle success (e.g., store token, redirect)
      } catch (error) {
        console.error(`There was an error logging in as ${role}!`, error);
      }
    } else {
      setErrors({
        ...errors,
        email: formValues.email ? "" : "Email is required",
        password: formValues.password ? "" : "Password is required",
      });
    }
  };

  if (role) {
    return (
      <LoginContainer>
        <FormContainer>
          <Heading>{`${
            role.charAt(0).toUpperCase() + role.slice(1)
          } Login`}</Heading>
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
      </LoginContainer>
    );
  }

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiFillThunderbolt />
                </PricingCardIcon>
                <PricingCardPlan>User Role</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Only View Access</PricingCardFeature>
                  <PricingCardFeature>Pay Invoices</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary as="a" onClick={() => setRole("customer")}>
                  Customer Login
                </Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFloatingCrystal />
                </PricingCardIcon>
                <PricingCardPlan>Accountant Role</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Can Create Customer Records
                  </PricingCardFeature>
                  <PricingCardFeature>Create Invoices</PricingCardFeature>
                  <PricingCardFeature>Track Payments</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary as="a" onClick={() => setRole("accountant")}>
                  Accountant Login
                </Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Admin Role</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited/Full Access</PricingCardFeature>
                  <PricingCardFeature>
                    Manages Users & Accountants
                  </PricingCardFeature>
                  <PricingCardFeature>Manages Everything</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary as="a" onClick={() => setRole("admin")}>
                  Admin Login
                </Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
