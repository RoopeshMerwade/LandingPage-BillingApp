import styled from "styled-components";
export const signUpForm = {
  username: {
    type: "text",
    placeholder: "Username",
    required: true,
  },
  email: {
    type: "email",
    placeholder: "Email",
    required: true,
  },
  password: {
    type: "password",
    placeholder: "Password",
    required: true,
  },
  confirmPassword: {
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
  buttonLabel: "Sign Up",

  loginOption: {
    text: "Already have an account? ",
    linkText: "Login",
    // link: "/login",
  },
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: "100% Secure",
  headline: "Stay protected 24/7 anywhere anytime",
  description:
    "We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",
  buttonLabel: "Learn More",
  imgStart: "",
  img: require("../../images/svg-1.svg"),
  alt: "Vault",
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTopLine: true,
  lightTextDesc: false,
  topLine: "Easy Setup",
  headline: "Super fast and simple onboarding process",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: "start",
  img: require("../../images/svg-1.svg"),
  alt: "Vault",
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: "Data Analytics",
  headline: "Every transaction is stored on our secure cloud database",
  description:
    "Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  img: require("../../images/svg-1.svg"),
  alt: "Vault",
};
