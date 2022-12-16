import React from 'react';

const Quiz = ({ questions, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);

  const handleChange = (event) => {
    setAnswers([...answers, event.target.value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{questions[currentQuestion].question}</h3>
      {questions[currentQuestion].options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
      <input type="submit" value="Next" />
    </form>
  );
};

export default Quiz;
