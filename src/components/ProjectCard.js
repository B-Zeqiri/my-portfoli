import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for image gallery

const ProjectCard = ({ title, description, images }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      position: 'relative',
      zIndex: 5
    }}
  >
    <ImageGallery 
      items={images.map((image) => ({ original: image, thumbnail: image }))} 
    />
    <div style={{ 
      padding: '1rem', 
      color: 'white', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <h3 style={{ color: 'lightgray' }}>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

export default ProjectCard;
