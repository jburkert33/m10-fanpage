import React from 'react';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f2f2f2' }}>
      <h1 style={{ color: '#d9534f' }}>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you're looking for.</p>
      <p>If this is an error, try refreshing the page or contact support.</p>
      <a href="/" style={{ textDecoration: 'none', color: '#5bc0de' }}>
        Go back to the homepage
      </a>
    </div>
  );
}

export default ErrorPage;