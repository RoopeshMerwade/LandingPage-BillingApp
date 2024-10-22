import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  GiCrystalBars,
  GiCutDiamond,
  GiRock,
  GiFloatingCrystal,
} from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import axios from "axios"; // Import axios for HTTP requests
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

const Pricing = () => {
  const handleCustomerLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/customer-login",
        {
          // Add necessary data for customer login
        }
      );
      console.log(response.data); // Handle success (e.g., store token, redirect)
    } catch (error) {
      console.error("There was an error logging in as Customer!", error);
    }
  };

  const handleAccountantLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/accountant-login",
        {
          // Add necessary data for accountant login
        }
      );
      console.log(response.data); // Handle success (e.g., store token, redirect)
    } catch (error) {
      console.error("There was an error logging in as Accountant!", error);
    }
  };

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/admin-login", {
        // Add necessary data for admin login
      });
      console.log(response.data); // Handle success (e.g., store token, redirect)
    } catch (error) {
      console.error("There was an error logging in as Admin!", error);
    }
  };

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
                <Button primary as="a" onClick={handleCustomerLogin}>
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
                <Button primary as="a" onClick={handleAccountantLogin}>
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
                <Button primary as="a" onClick={handleAdminLogin}>
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
