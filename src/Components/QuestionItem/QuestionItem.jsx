import React from "react";

function QuestionItem({ question }) {
  return (
    <div className="question-item">
      <h3>{question.title}</h3>
      <div className="tags">
        {question.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="meta">
        <div>
          <span>
            Asked:{" "}
            {new Date(question.creation_date * 1000).toLocaleDateString()}
          </span>
        </div>
        <div>
          <span>Score: {question.score}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;
