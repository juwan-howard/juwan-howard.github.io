import React from 'react';
import './PersonalStatement.css';

const PersonalStatement = ({ text }) => {
  return (
    <p className="personal-statement">
      {text}
    </p>
  );
};

export default PersonalStatement; 