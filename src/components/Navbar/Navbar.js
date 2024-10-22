import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  MobileIcon,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import ContactUs from "../../pages/ContactUs/ContactUs"; // Import ContactUs component
import Footer from "../Footer/Footer"; // Import Footer component

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);
  const [servicesClick, setServicesClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  const [showContactForm, setShowContactForm] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setProductsClick(false);
    setServicesClick(false);
  };
  const handleServicesClick = () => {
    setHomeClick(false);
    setProductsClick(false);
    setServicesClick(true);
  };

  // const handleProductsClick = () => {
  //   setHomeClick(false);
  //   setProductsClick(true);
  //   setServicesClick(false);
  // };

  // const handleContactClick = () => {
  //   setShowContactForm(true);
  //   closeMobileMenu();
  // };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              BILLING
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem
                onClick={handleServicesClick}
                servicesClick={servicesClick}
              >
                <NavLinks to="/services" onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/contactus" onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontBig={button} primary>
                    Login
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      {showContactForm && (
        <>
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
}

export default Navbar;
