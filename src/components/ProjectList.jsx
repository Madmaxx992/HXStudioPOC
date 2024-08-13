import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProjectListContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProjectHeader = styled.div`
  margin-top: 12px;
  margin-bottom: 8px;
`;

const ProjectDomainAndName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ProjectDomain = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ProjectName = styled.span`
  margin-right: 8px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const Button = styled.button`
  background-color: grey;
  color: white;
  border: none;
  border-radius: 4px;

  cursor: pointer;
`;

const ProjectInfo = styled.p`
  margin: 4px 0;
`;

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/dashboard");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectListContainer>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project._id}>
            <ProjectImage
              src={`http://localhost:5000/uploads/${project.image}`}
              alt={project.projectName}
            />
            <ProjectHeader>
              <ProjectDomainAndName>
                <ProjectDomain>{project.domain}</ProjectDomain>
                <Separator>|</Separator>
                <ProjectName>{project.projectName}</ProjectName>
              </ProjectDomainAndName>
              <ProjectTitle>{project.projectTitle}</ProjectTitle>
            </ProjectHeader>
            <ButtonGroup>
              <Button>Mobile</Button>
              <Button>Web</Button>
            </ButtonGroup>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectListContainer>
  );
};

export default ProjectList;
