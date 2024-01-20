// Import necessary React libraries
import React, { useState } from 'react';
import './JobPage.css';

// Define the main JobPage component
const JobPage = () => {
  // Placeholder data for universities and their prerequisites
  const universitiesData = [
    {
      id: 1,
      name: 'University A',
      prerequisites: [
        'Chemistry',
        'Physics',
        'Mathematics',
        'Biology',
        'English',
      ],
    },
    {
      id: 2,
      name: 'University B',
      prerequisites: [
        'Chemistry',
        'Mathematics',
        'Physics',
        'English',
        'Social Science',
      ],
    },
    // Add more universities as needed
  ];

  // State for tracking the selected university
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // Function to handle university selection
  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="job-page">
      {/* ... (previous code) */}
      
      {/* Program Section */}
      <section className="program">
        <h2>Local Universities Offering Chemical Engineering Programs</h2>
        <div className="university-grid">
          {universitiesData.map((university) => (
            <div key={university.id} className={`university-card ${selectedUniversity === university ? 'selected' : ''}`} onClick={() => handleUniversitySelect(university)}>
              <h3>{university.name}</h3>
            </div>
          ))}
        </div>

        {/* Prerequisites Gallery */}
        {selectedUniversity && (
          <div className="prerequisites-gallery">
            <h3>High School Prerequisites for {selectedUniversity.name}</h3>
            <ul>
              {selectedUniversity.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ... (remaining sections) */}
    </div>
  );
};

export default JobPage;
