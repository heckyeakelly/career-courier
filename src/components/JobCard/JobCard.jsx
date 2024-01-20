// Import necessary React libraries
import React from 'react';

// Define the JobCard component
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Education Level: {job.educationLevel}</p>
      <p>Salary: {job.salary}</p>
    </div>
  );
};

export default JobCard;
