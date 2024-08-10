import React from 'react';
import styled from 'styled-components';
import ProjectGallery from '../components/ProjectGallery';
import backgroundImage from '../assets/projects/clayton-malquist-KVCN2hMTk1E-unsplash.jpg';

const PageWrapper = styled.div`
  position: relative; 
  text-align: center;
  padding: 2rem;
  min-height: 100vh; 
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    color: white; 
    margin-bottom: 2rem;
  }
`;

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <h1>My Projects</h1>
      <ProjectGallery />
    </PageWrapper>
  );
};

export default ProjectsPage;
