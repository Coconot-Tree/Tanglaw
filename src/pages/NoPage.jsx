import React from 'react';
import './style.css';

const NoPage = () => {
  document.title = "Page Not Found";
  return (
  <div className="tanglaw__page-title">
    <h2>Page Not Found</h2>
  </div>
  )
}

export default NoPage;