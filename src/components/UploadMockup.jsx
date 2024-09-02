import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 15px; /* Reduced padding */
  border-radius: 8px;
  width: 70%; /* Reduced width */
  max-width: 900px; /* Maximum width reduced */
  height: auto;
  max-height: 90%; /* Maximum height adjusted */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px; /* Reduced margin */
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px; /* Reduced font size */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem; /* Reduced font size */
  cursor: pointer;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 10px; /* Reduced gap between columns */
  margin-bottom: 15px; /* Reduced margin */
  flex-wrap: wrap; /* Allow fields to wrap if needed */
`;

const FormColumn = styled.div`
  flex: 1;
`;

const Label = styled.label`
  font-size: 12px; /* Reduced label size */
  margin-bottom: 5px; /* Reduced margin */
  display: block;
`;

const InputField = styled(Field)`
  width: 100%;
  padding: 8px; /* Reduced padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px; /* Reduced font size */
  margin-bottom: 8px; /* Reduced margin */
`;

const TextAreaField = styled(Field)`
  width: 100%;
  height: 80px; /* Reduced height */
  padding: 8px; /* Reduced padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px; /* Reduced font size */
  margin-bottom: 8px; /* Reduced margin */
`;

const ErrorText = styled.div`
  color: red;
  font-size: 10px; /* Reduced font size */
  margin-top: -5px; /* Reduced margin */
  margin-bottom: 8px; /* Reduced margin */
`;

const FileUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px; /* Reduced height */
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin-bottom: 15px; /* Reduced margin */
  cursor: pointer;
`;

const FileUploadLabel = styled.label`
  font-size: 14px; /* Reduced font size */
  color: #888;
  display: flex;
  align-items: center;
  gap: 5px; /* Reduced gap */
`;

const CloudIcon = styled.span`
  font-size: 20px; /* Reduced icon size */
`;

const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Reduced gap */
  margin-bottom: 15px; /* Reduced margin */
`;

const TagButton = styled.button`
  padding: 4px 8px; /* Reduced padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 12px; /* Reduced font size */
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px; /* Reduced gap */
`;

const PrimaryButton = styled.button`
  padding: 8px 16px; /* Reduced padding */
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px; /* Reduced font size */
`;

const SecondaryButton = styled.button`
  padding: 8px 16px; /* Reduced padding */
  background-color: #f0f0f0;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px; /* Reduced font size */
`;

// Upload Button
const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: #ddd;
  }
`;

// Validation Schema
const validationSchema = Yup.object({
  projectTitle: Yup.string().required("Project title is required"),
  projectDescription: Yup.string().required("Project description is required"),
  appType: Yup.string().required("App type is required"),
});

const UploadMockup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleFileUpload(acceptedFiles);
    },
  });

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (acceptedFiles) => {
    // Handle file upload to S3 bucket
    console.log("Uploaded files:", acceptedFiles);
  };

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <UploadButton onClick={handleUploadClick}>Upload Mockup?</UploadButton>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Add Mock-ups</ModalTitle>
              <CloseButton onClick={handleModalClose}>&times;</CloseButton>
            </ModalHeader>
            <Formik
              initialValues={{
                projectTitle: "",
                projectDescription: "",
                appType: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // Handle form submission and file upload
                console.log("Form values:", values);
              }}
            >
              {() => (
                <Form>
                  <FormGroup>
                    <FormColumn>
                      <Label htmlFor="projectTitle">Project Title</Label>
                      <InputField
                        id="projectTitle"
                        name="projectTitle"
                        type="text"
                        placeholder="Enter project title"
                      />
                      <ErrorMessage name="projectTitle" component={ErrorText} />

                      <Label htmlFor="projectDescription">
                        Project Description
                      </Label>
                      <TextAreaField
                        id="projectDescription"
                        name="projectDescription"
                        component="textarea"
                        placeholder="Enter project description"
                      />
                      <ErrorMessage
                        name="projectDescription"
                        component={ErrorText}
                      />
                    </FormColumn>
                    <FormColumn>
                      <Label htmlFor="category">Category</Label>
                      <InputField
                        id="category"
                        name="category"
                        as="select"
                        placeholder="Select category"
                      >
                        <option value="" label="Select category" />
                        {/* Add more options here */}
                      </InputField>
                      <ErrorMessage name="category" component={ErrorText} />

                      <Label htmlFor="module">Module</Label>
                      <InputField
                        id="module"
                        name="module"
                        as="select"
                        placeholder="Select module"
                      >
                        <option value="" label="Select module" />
                        {/* Add more options here */}
                      </InputField>
                      <ErrorMessage name="module" component={ErrorText} />

                      <Label htmlFor="appType">App Type</Label>
                      <InputField
                        id="appType"
                        name="appType"
                        type="text"
                        placeholder="Enter app type"
                      />
                      <ErrorMessage name="appType" component={ErrorText} />
                    </FormColumn>
                  </FormGroup>

                  <FileUploadContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    <FileUploadLabel>
                      <CloudIcon>☁️</CloudIcon>
                      Drag file to Upload
                    </FileUploadLabel>
                  </FileUploadContainer>

                  <TagsSection>
                    {tags.map((tag, index) => (
                      <TagButton key={index}>
                        {tag}
                        <RemoveTagButton onClick={() => handleTagRemove(tag)}>
                          &times;
                        </RemoveTagButton>
                      </TagButton>
                    ))}
                  </TagsSection>

                  <FormGroup>
                    <FormColumn>
                      <InputField
                        id="tagInput"
                        name="tagInput"
                        type="text"
                        placeholder="Enter tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                    </FormColumn>
                    <FormColumn>
                      <PrimaryButton onClick={handleTagAdd}>
                        Add Tag
                      </PrimaryButton>
                    </FormColumn>
                  </FormGroup>

                  <ButtonGroup>
                    <PrimaryButton type="submit">Upload</PrimaryButton>
                    <SecondaryButton type="button" onClick={handleModalClose}>
                      Cancel
                    </SecondaryButton>
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default UploadMockup;
