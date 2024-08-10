import React from 'react';
import styled from 'styled-components';

import githubImage from '../assets/contanct/git.png';
import linkedinImage from '../assets/contanct/linkedin.png';
import backgroundImage from '../assets/contanct/florian-klauer-mk7D-4UCfmg-unsplash.jpg';

const ContactSection = styled.section`
  position: relative;
  padding: 3rem 1rem;
  color: #fff;
  text-align: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  z-index: 2;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  
  
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 8px;
  
  a {
    display: inline-block;
    margin: 0 1rem;

    img {
      width: 60px;
      height: 60px; 
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 2;

  input,
  textarea {
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
  }

  button {
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #666;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactLinks>
        <a href="https://github.com/B-Zeqiri" target="_blank" rel="noopener noreferrer">
          <img src={githubImage} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/besartzeqiri" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImage} alt="LinkedIn" />
        </a>
      </ContactLinks>
      <ContactForm action="https://formspree.io/f/xblryknn" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
