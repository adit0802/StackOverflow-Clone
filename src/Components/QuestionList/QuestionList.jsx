import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";
import Filters from "../Filters";
import "./QuestionList.css";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("interesting");

  useEffect(() => {
    fetchQuestions(filter);
  }, [filter]);

  const fetchQuestions = async (selectedFilter) => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions`,
        {
          params: {
            order: "desc",
            sort: selectedFilter,
            site: "stackoverflow",
          },
        }
      );
      setQuestions(response.data.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div>
      <h2 className="topqn">Top Question</h2>
      <div className="btngang">
        <Filters currentFilter={filter} onFilterChange={setFilter} />
        <button className="btn">ASK QUESTION</button>
      </div>
      <div className="question-list">
        {questions.map((question) => (
          <QuestionItem key={question.question_id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
