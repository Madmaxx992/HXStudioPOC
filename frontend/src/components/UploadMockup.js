// UploadMockup.js
import React from "react";
import styled from "styled-components";

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const UploadMockup = () => {
  return <UploadButton>Upload Mockup?</UploadButton>;
};

export default UploadMockup;
