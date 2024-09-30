// src/pages/QnA.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Question from '../components/Question';
import CreateQuestion from '../components/CreateQuestion';

function QnA() {
  // Sample data for questions
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: 'Emily Clark',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '2024-04-26T09:00:00Z',
      text: 'What are the best places to learn Japanese in Tokyo?',
      likes: 5,
      answers: [
        { id: 1, user: 'George Martin', text: 'Check out the Tokyo Language Institute.' },
      ],
    },
    // Add more questions
  ]);

  const addNewQuestion = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Q&A</h1>
      <CreateQuestion addNewQuestion={addNewQuestion} />
      <div className="space-y-6 mt-6">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </MainLayout>
  );
}

export default QnA;
