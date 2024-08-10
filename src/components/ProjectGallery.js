import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import quiz1 from '../assets/Quiz/quiz3.jpeg';
import quiz2 from '../assets/Quiz/quiz2.jpeg';
import quiz3 from '../assets/Quiz/quiz1.jpeg';
import recipe1 from '../assets/recipe/recipe1.jpeg';
import recipe2 from '../assets/recipe/recipe2.jpeg';
import recipe3 from '../assets/recipe/recipe3.jpeg';
import recipe4 from '../assets/recipe/recipe4.jpeg';
import recipe5 from '../assets/recipe/recipe5.jpeg';
import recipe6 from '../assets/recipe/recipe6.jpeg';
import recipe7 from '../assets/recipe/recipe7.jpeg';
import phonebook1 from '../assets/phonebook/phonebook1.jpeg';
import phonebook2 from '../assets/phonebook/phonebook2.jpeg';
import phonebook3 from '../assets/phonebook/phonebook3.jpeg';
import phonebook4 from '../assets/phonebook/phonebook4.jpeg';
import phonebook5 from '../assets/phonebook/phonebook5.jpeg';
import notebook1 from '../assets/notebook/notebook1.jpeg';
import notebook2 from '../assets/notebook/notebook2.jpeg';
import notebook3 from '../assets/notebook/notebook3.jpeg';
import kingenma1 from '../assets/kingenma/king1.jpeg';
import kingenma2 from '../assets/kingenma/king2.jpeg';
import kingenma3 from '../assets/kingenma/king3.jpeg';
import kingenma4 from '../assets/kingenma/king4.jpeg';
import kingenma5 from '../assets/kingenma/king5.jpeg';
import backgroundImage from '../assets/projects/clayton-malquist-KVCN2hMTk1E-unsplash.jpg';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
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
`;


const ProjectGallery = () => {
  const projects = [
    {
      title: 'Quiz',
      description: 'Quiz is a dynamic and interactive quiz application built with React.js. It offers users a series of 5 questions on a variety of topics. After answering all the questions, Quiz provides immediate feedback, indicating how many questions were answered correctly out of the total. It also calculates the percentage of correct answers, allowing users to assess their knowledge and challenge themselves to improve.',
      images: [
        quiz1,
        quiz2,
        quiz3,
      ],
    },
    {
      title: 'Recipes',
      description: 'Recipes is a dynamic and interactive web application developed using React.js, designed to demonstrate my proficiency in building feature-rich web applications. This application showcases various functionalities, including user authentication, data manipulation with axious from a fake API, and CRUD (Create, Read, Update, Delete) operations on recipes. And it is build compleatly in components.',
      images: [
        recipe1,
        recipe2,
        recipe3,
        recipe4,
        recipe5,
        recipe6,
        recipe7
      ],
    },
    {
      title: 'Phonebook',
      description: 'Phonebook is a mini web application designed to help users organize and manage contact information effectively. It serves as a digital repository for storing and managing the details of individuals, including their name, last name, address, city, country, email, and phone number.',
      images: [
        phonebook1,
        phonebook2,
        phonebook3,
        phonebook4,
        phonebook5
      ],
    },
    {
      title: 'Notebook',
      description: 'Notebook is a beautifully designed web application (not for deployment) built with React.js, offering users an elegant and efficient way to manage and organize their notes. With a focus on simplicity and creativity, Notebook provides a seamless experience for adding, tagging, and searching for notes. Notebook incorporates a tagging system that allows users to categorize their notes with descriptive tags. Tags act as labels to help users quickly classify and search specific notes. All notes and their associated tags are stored in the local storage.',
      images: [
        notebook3,
        notebook2,
        notebook1,
      ],
    },
    {
      title: 'King Enma',
      description: 'King Enma is a meticulously crafted web page designed with a singular mission – to provide clean and accessible water to the underserved communities of Africa. This dynamic online platform is a testament to innovation and compassion, designed and developed for an NFT project. Utilizing a versatile tech stack that includes PHP, Font Awesome, Bootstrap, HTML5, CSS, and jQuery.',
      images: [
        kingenma1,
        kingenma2,
        kingenma3,
        kingenma4,
        kingenma5
      ],
    },
  ];

  return (
    <Gallery>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          images={project.images}
        />
      ))}
    </Gallery>
  );
};

export default ProjectGallery;
