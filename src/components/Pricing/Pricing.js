import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
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
                <Button primary as="a" href="/sign-up">
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
                <Button primary as="a" href="/Log In">
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
                <Button primary as="a" href="/sign-up">
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
