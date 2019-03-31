import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const {
    title, website, sourceCode, description,
  } = props;
  return (
    <div className="card">
      <div className="card__cover">{title}</div>
      <div className="card__content">
        <span className="card__title">{description}</span>
        <a href={website} target="_blank" rel="noopener noreferrer" className="card__button">Visit Website</a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="card__button">Source Code</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
