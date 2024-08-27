// Logo.js
import styled from "styled-components";
import logoImage from "../assets/images/logo-light.png"; // Adjust the path accordingly

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoImage = styled.img`
  height: 50px; /* Adjust the height as per your need */
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logoImage} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
