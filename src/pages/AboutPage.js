import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/aboutpage/mohamed-nohassi--0xMiYQmk8g-unsplash.jpg'; // Adjust the path as needed

import reactImage from '../assets/aboutpage/reactIcon.png';
import aspnetImage from '../assets/aboutpage/asp.net.png';
import nodejsImage from '../assets/aboutpage/nodeJs.png';
import sqlImage from '../assets/aboutpage/sql.png';
import mongodbImage from '../assets/aboutpage/mongoDB.png';
import gitImage from '../assets/aboutpage/git.png';
import visualStudioImage from '../assets/aboutpage/visualcode.png';
import postmanImage from '../assets/aboutpage/postman.png';
import apiImage from '../assets/aboutpage/api.png';
import illustratorImage from '../assets/aboutpage/ai.png';
import blenderImage from '../assets/aboutpage/blender.png';

const AboutSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  color: #333;
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

 * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #fff;
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 160px;
      height: 160px;
      color: #fff;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(5px);
      border-radius: 8px; 
      padding: 1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
      animation: pulse 2s infinite; 
      
      img {
        width: 80px; 
        height: 80px;
        object-fit: contain; 
        margin-bottom: 0.5rem;
      }

      h3 {
        font-size: 1rem;
        color: #fff; 
        margin: 0;
      }
    }
  }
`;

const AboutPage = () => {
  return (
    <AboutSection>
      <h1>About Me</h1>
      <p>
        I am a full-stack developer with a passion for creating dynamic and responsive web applications. With a strong background in front-end development using React.js, and proficiency in back-end technologies like Node.js and ASP.NET, I bring a comprehensive approach to web development.
      </p>
      <p>
        My skill set includes working with various databases, such as SQL Server and MongoDB, and I am experienced in using tools like Git, GitHub, and Trello for project management. I am also proficient in using Visual Studio and Visual Studio Code, and I have experience with API development and integration.
      </p>
      <p>
        I am committed to continuous learning and improvement, and I am always looking for opportunities to expand my knowledge and contribute to innovative projects.
      </p>
      <ul>
        <li>
          <img src={reactImage} alt="React.js" />
          <h3>React.js</h3>
        </li>
        <li>
          <img src={aspnetImage} alt="ASP.NET" />
          <h3>ASP.NET</h3>
        </li>
        <li>
          <img src={nodejsImage} alt="Node.js" />
          <h3>Node.js</h3>
        </li>
        <li>
          <img src={sqlImage} alt="SQL Server" />
          <h3>SQL Server</h3>
        </li>
        <li>
          <img src={mongodbImage} alt="MongoDB" />
          <h3>MongoDB</h3>
        </li>
        <li>
          <img src={gitImage} alt="Git & GitHub" />
          <h3>Git & GitHub</h3>
        </li>
        <li>
          <img src={visualStudioImage} alt="Visual Studio & Visual Code" />
          <h3>Visual Studio & Visual Code</h3>
        </li>
        <li>
          <img src={postmanImage} alt="Postman" />
          <h3>Postman</h3>
        </li>
        <li>
          <img src={apiImage} alt="API Development" />
          <h3>API Development</h3>
        </li>
        <li>
          <img src={illustratorImage} alt="Adobe Illustrator" />
          <h3>Adobe Illustrator</h3>
        </li>
        <li>
          <img src={blenderImage} alt="Blender" />
          <h3>Blender</h3>
        </li>
      </ul>
    </AboutSection>
  );
};

export default AboutPage;
