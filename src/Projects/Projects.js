import React from 'react';
import Card from './Cards/Card';
import './Projects.css';

function Projects() {
  const myProjects = [
    {
      title: "Artur's Saga",
      website: 'google.com',
      sourceCode: 'google.com',
      description: 'A game where you need to help Artur to get his coffee and avoid bugs.',
    },
    {
      title: "Artur's Saga",
      website: 'google.com',
      sourceCode: 'google.com',
      description: 'A game where you need to help Artur to get his coffee and avoid bugs.',
    },
    {
      title: "Artur's Saga",
      website: 'google.com',
      sourceCode: 'google.com',
      description: 'A game where you need to help Artur to get his coffee and avoid bugs.',
    },
  ];
  return (
    <div className="projects">
      {
      myProjects.map(project => (
        <Card
          title={project.title}
          website={project.website}
          sourceCode={project.sourceCode}
          description={project.description}
        />
      ))
    }

    </div>
  );
}

export default Projects;
