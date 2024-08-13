// UploadMockup.js
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/admin/dashboard/upload"); // Navigate to the ProductUpload route
  };

  return (
    <UploadButton onClick={handleUploadClick}>Upload Mockup?</UploadButton>
  );
};

export default UploadMockup;
