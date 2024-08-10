import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/growtika-9WnjxT1NCoY-unsplash.jpg';

const IntroSection = styled.section`
  position: relative;
  text-align: center;
  height: 90vh;
  padding: 4rem 2rem;
  color: white;
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
    background: rgba(0, 0, 0, 0.3); 
    z-index: 1; 
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    margin-top: 100px;
    color: white;
    z-index: 2; 
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    z-index: 2; 
  }

  a {
    text-decoration: none;
    color: #0073e6;
    font-size: 1.1rem;
    border: 2px solid #0073e6;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
    z-index: 2;

    &:hover {
      background-color: #0073e6;
      color: #fff;
    }
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

const HomePage = () => (
  <IntroSection>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Besart Zeqiri, a passionate developer specializing in full-stack web development. 
        Explore my projects and feel free to get in touch!
      </p>
      <Link to="/projects">See My Projects</Link>
    </motion.div>
  </IntroSection>
);

export default HomePage;
