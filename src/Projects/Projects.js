import React from 'react';
import Card from './Cards/Card';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <Card
        title="Artur's Saga"
        website="google.com"
        sourceCode="google.com"
        description="A game where you need to help Artur to get his coffee and avoid bugs."
      />
    </div>
  );
}

export default Projects;
