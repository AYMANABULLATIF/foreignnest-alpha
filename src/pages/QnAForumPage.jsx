// src/pages/QnAForumPage.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaThumbsUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const QnAForumPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What’s the best way to learn Japanese quickly?',
      answers: [
        { id: 1, user: 'John Doe', nationality: 'Syrian', answer: 'Practice with native speakers!', likes: 2 },
        { id: 2, user: 'Jane Smith', nationality: 'Syrian', answer: 'Use language learning apps like Duolingo.', likes: 1 },
      ],
    },
    {
      id: 2,
      question: 'How do I get a work visa in Japan?',
      answers: [
        { id: 1, user: 'Ali Ahmed', nationality: 'Syrian', answer: 'You need to find an employer willing to sponsor you.', likes: 3 },
      ],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        question: newQuestion,
        answers: [],
      },
    ]);
    setNewQuestion('');
  };

  const handleAddAnswer = (questionId, answerText) => {
    if (!answerText.trim()) return;
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: [
                ...q.answers,
                {
                  id: Date.now(),
                  user: 'Current User', // Replace with actual user data
                  nationality: 'Syrian',
                  answer: answerText,
                  likes: 0,
                },
              ],
            }
          : q
      )
    );
  };

  const handleLike = (questionId, answerId) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId ? { ...a, likes: a.likes + 1 } : a
              ),
            }
          : q
      )
    );
  };

  return (
    <MainLayout>
      <div className="p-8 bg-darkCard rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Q&A Forum</h2>

        {/* Form to Add New Question */}
        <form onSubmit={handleAddQuestion} className="mb-8">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask a new question..."
            className="w-full p-3 rounded-md bg-darkBackground text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-link"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Submit Question
          </button>
        </form>

        {/* Display Questions and Answers */}
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="bg-darkBackground p-4 rounded-md shadow-inner">
              <h3 className="text-lg font-semibold mb-4">{question.question}</h3>

              {/* Display Answers */}
              <div className="space-y-4">
                {question.answers.map((answer) => (
                  <div key={answer.id} className="flex items-start space-x-4 bg-gray-800 p-3 rounded-lg">
                    <img src={answer.userImage || 'https://via.placeholder.com/50'} alt={`${answer.user}'s profile`} className="rounded-full w-10 h-10" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-300">
                        <strong>{answer.user} ({answer.nationality})</strong>
                      </p>
                      <p className="text-sm text-gray-400">{answer.answer}</p>
                      <button
                        onClick={() => handleLike(question.id, answer.id)}
                        className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 mt-2"
                      >
                        <FaThumbsUp />
                        <span>{answer.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form to Add New Answer */}
              <AddAnswerForm questionId={question.id} onAddAnswer={handleAddAnswer} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// Component for Adding a New Answer
const AddAnswerForm = ({ questionId, onAddAnswer }) => {
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnswer(questionId, answerText);
    setAnswerText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        placeholder="Write your answer..."
        className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-link"
        rows={2}
      ></textarea>
      <button
        type="submit"
        className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md transition duration-200"
      >
        Submit Answer
      </button>
    </form>
  );
};

AddAnswerForm.propTypes = {
  questionId: PropTypes.number.isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};

export default QnAForumPage;
