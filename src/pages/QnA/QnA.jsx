import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuestionList from '../../components/QnA/QuestionList/QuestionList';
import AskQuestionForm from '../../components/QnA/AskQuestionForm/AskQuestionForm';
import SearchBar from '../../components/QnA/SearchBar/SearchBar';
import styles from './QnA.module.css';

function QnA() {
  const [questions, setQuestions] = useState([
    // Initial mock data
    {
      id: 1,
      user: 'Alice',
      title: 'How to improve React performance?',
      description: 'I am experiencing lag in my React application. What are some best practices to enhance performance?',
      answers: [
        {
          id: 1,
          user: 'Bob',
          text: 'Consider using React.memo and useCallback to prevent unnecessary re-renders.',
        },
      ],
    },
    {
      id: 2,
      user: 'Charlie',
      title: 'What is the difference between state and props?',
      description: 'Can someone explain the difference between state and props in React?',
      answers: [],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAskQuestion = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  const filteredQuestions = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.qnaPage}>
      <Header />
      <main className={styles.mainContent}>
        <AskQuestionForm onAskQuestion={handleAskQuestion} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <QuestionList questions={filteredQuestions} />
      </main>
      <Footer />
    </div>
  );
}

export default QnA;
