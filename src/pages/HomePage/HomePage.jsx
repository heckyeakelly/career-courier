// Import necessary React libraries
import React, { useState } from 'react';

// Define the main Quiz component
const HomePage = () => {
  // State to manage user answers
  const [answers, setAnswers] = useState([]);

  // Questions data
  const questions = [
    ['analytical & technical', 'creative & conceptual'],
    ['team-oriented, collaborative', 'independent, self-directed'],
    ['routine, structured, risk-averse', 'flexible, risk-taking'],
    ['physical, manual', 'office, non-manual']

  ];

  // Function to handle user's answer selection
  const handleAnswer = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  // Function to submit the quiz and display results
  const submitQuiz = () => {
    // Add logic to determine the career based on the user's answers
    // For simplicity, let's just display the answers for now
    alert('Your answers: ' + answers.join(', '));
  };

  console.log(questions)

  return (
    <main>
      <section className="hero">
        <h2 className="hero__left">Unsure of your career path? We can send you off the right path.</h2>
        <div className="hero__right"></div>
      </section>

      <section className="quiz">
        <article className="quiz__introduction">
          <h2>Let's be real. Deciding your future can be overwhelming, and that's ok!</h2>
          <p>We can start small by choosing an industry you can work in based on your interests.</p>
        </article>
        <article className="quiz__questions">
          {questions.map((question, index) => (
            <div key={index}>

              <span>{question[index, 0]}</span>
              {/* Use a range input as a slider */}
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={answers[index] || 0}
                onChange={(e) => handleAnswer(index, parseInt(e.target.value))}
              />
              <span>{question[index, 1]}</span>
              {/* Display the current value selected on the slider */}
              {/* <span>{answers[index] || 0}</span> */}
            </div>
          ))}
          {/* Button to submit the quiz */}
          <button onClick={submitQuiz}>Submit</button>
        </article>
      </section>

      <section className="results">
      <article className="results__introduction">
<h3>Based on your qualities, we think that 
these industries make a great fit for you. </h3>
<p>Let’s browse some career options in your recommended industries.
</p>
      </article>
      
      </section>
    </main>
  );
};

export default HomePage;
