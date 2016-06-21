import React from 'react';

const About = ({ name, version }) => (
  <div className="about">
    <h2 className="title">{name}</h2>
    <h3>{version}</h3>
  </div>
);

About.propTypes = {
  name: React.PropTypes.string.isRequired,
  version: React.PropTypes.string.isRequired,
};

export default About;
