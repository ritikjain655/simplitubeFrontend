import React, { useState } from 'react';
import QuizApp from './components/QuizApp';
import NotesApp from './components/NotesApp';
import SummaryApp from './components/SummaryApp';

import './App.css'; // Optional global styling

const App = () => {
  const [view, setView] = useState('quiz');

  return (
    <div className="glass-wrapper mx-5 my-5">
  {/* your existing components here */}

    <div className="main-container">
      <nav className="nav-buttons">
        <button
          className={view === 'quiz' ? 'active' : ''}
          onClick={() => setView('quiz')}
        >
          Quiz
        </button>
        <button
          className={view === 'notes' ? 'active' : ''}
          onClick={() => setView('notes')}
        >
          Notes
        </button>
        <button
          className={view === 'summary' ? 'active' : ''}
          onClick={() => setView('summary')}
        >
          Summary
        </button>
      </nav>

      <div className="content-area">
        {view === 'quiz' && <QuizApp />}
        {view === 'notes' && <NotesApp />}
        {view === 'summary' && <SummaryApp />}
      </div>
    </div>
    </div>
  );

};

export default App;
