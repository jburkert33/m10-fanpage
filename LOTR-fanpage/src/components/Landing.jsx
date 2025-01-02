import React from 'react';

function Landing() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My Landing Page!</h1>
      <p style={styles.paragraph}>This is a simple landing page built with React and React Router.</p>
      <a href="/about" style={styles.link}>Learn More</a>
    </div>
  );
}

export default Landing;