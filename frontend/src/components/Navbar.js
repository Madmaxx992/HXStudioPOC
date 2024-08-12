// Navbar.js
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Profile from "./Profile";
import UploadMockup from "./UploadMockup";
import Tabs from "./Tabs";
import Search from "./Search";
import backgroundImage from "../assets/background.png"; // Adjust the path accordingly

const NavbarWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 8px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const tabs = [
  "Visual Samples",
  "Case Studies",
  "Process Diagram & Artifacts",
  "Before After",
];

const Navbar = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <NavbarWrapper>
      <LeftSection>
        <Logo />
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      </LeftSection>
      <Search />
      <RightSection>
        <UploadMockup />
        <Profile name="George Martin" />
      </RightSection>
    </NavbarWrapper>
  );
};

export default Navbar;
