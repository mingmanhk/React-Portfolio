import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="status" aria-label="Loading content">
      <div className="spinner" aria-hidden="true">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">Loading portfolio...</p>
      <div className="loading-progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
        <div className="loading-progress-bar"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
