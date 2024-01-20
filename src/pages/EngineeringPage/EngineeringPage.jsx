// Import necessary React libraries
import React, { useState } from 'react';
import JobCard from '../../components/JobCard/JobCard.jsx';
import './EngineeringPage.css';

// Placeholder data for jobs
const jobsData = [
  {
    id: 1,
    title: 'Software Engineer',
    educationLevel: 'Bachelor\'s Degree',
    salary: '$80,000 - $120,000',
  },
  {
    id: 2,
    title: 'Mechanical Engineer',
    educationLevel: 'Master\'s Degree',
    salary: '$70,000 - $100,000',
  },
  {
    id: 3,
    title: 'Chemical Engineer',
    educationLevel: 'Master\'s Degree',
    salary: '$70,000 - $100,000',
  }
  // Add more job data as needed
];

// Define the main JobsPage component
const EngineeringPage = () => {
  // State for filtering
  const [educationFilter, setEducationFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  // Function to filter jobs based on education level and salary range
  const filterJobs = (job) => {
    const educationMatch = !educationFilter || job.educationLevel === educationFilter;
    const salaryMatch =
      !salaryFilter ||
      (parseInt(job.salary.split('$')[1].replace(/,/g, '')) >= parseInt(salaryFilter.split('-')[0]) &&
        parseInt(job.salary.split('$')[1].replace(/,/g, '')) <= parseInt(salaryFilter.split('-')[1]));

    return educationMatch && salaryMatch;
  };

  // Filtered jobs based on selected filters
  const filteredJobs = jobsData.filter(filterJobs);

  return (
    <div className="jobs-page">
      {/* Sidebar for filters */}
      <div className="sidebar">
        <h2>Filters</h2>
        <label>
          Education Level:
          <select value={educationFilter} onChange={(e) => setEducationFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            {/* Add more education levels as needed */}
          </select>
        </label>
        <label>
          Salary Range:
          <select value={salaryFilter} onChange={(e) => setSalaryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="$0 - $50,000">$0 - $50,000</option>
            <option value="$50,001 - $100,000">$50,001 - $100,000</option>
            <option value="$100,001 - $150,000">$100,001 - $150,000</option>
            {/* Add more salary ranges as needed */}
          </select>
        </label>
      </div>

      {/* Jobs list */}
      <div className="job-list">
        <h1>Engineering Jobs</h1>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default EngineeringPage;
