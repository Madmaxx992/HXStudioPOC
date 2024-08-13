import React, { useState } from "react";
import styled from "styled-components";

const ProductUploadWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ImagePreview = styled.div`
  margin-top: 16px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const UploadButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ProductUpload = () => {
  const [projectName, setProjectName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [domain, setDomain] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);
    formData.append("domain", domain);
    if (image) formData.append("image", image);

    try {
      const response = await fetch(
        "http://localhost:5000/admin/dashboard/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Project uploaded successfully");
        setProjectName("");
        setProjectTitle("");
        setProjectDescription("");
        setDomain("");
        setImage(null);
        setImagePreview("");
      } else {
        alert("Failed to upload project");
      }
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("Error uploading project");
    }
  };

  return (
    <ProductUploadWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="projectTitle">Project Title</Label>
        <Input
          type="text"
          id="projectTitle"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="projectDescription">
          Project Description (optional)
        </Label>
        <TextArea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="domain">Domain</Label>
        <Select
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          required
        >
          <option value="">Select Domain</option>
          <option value="HealthTech">HealthTech</option>
          <option value="HRTech">HRTech</option>
          <option value="EdTech">EdTech</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="imageUpload">Upload Image</Label>
        <Input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        {imagePreview && (
          <ImagePreview>
            <img src={imagePreview} alt="Preview" />
          </ImagePreview>
        )}
      </FormGroup>

      <UploadButton type="submit">Upload Project</UploadButton>
    </ProductUploadWrapper>
  );
};

export default ProductUpload;
