import React, { useState } from 'react';
import QuizApp from './components/QuizApp';
import NotesApp from './components/NotesApp';
import SummaryApp from './components/SummaryApp';
import NavBar from './components/NavBar';
import './App.css'; // Optional global styling
import { useEffect } from 'react';
const App = () => {
  const [view, setView] = useState('summary');

  useEffect(() => {
    const pingBackend = () => {
      fetch(process.env.REACT_APP_ALLISWELL)
        .then((res) => res.json())
        .then((data) => console.log('Ping success:', data))
        .catch((err) => console.error('Ping error:', err));
    };

    pingBackend(); // Call once on load
    const interval = setInterval(pingBackend, 14 * 60 * 1000); // every 14 min

    return () => clearInterval(interval);
  }, []);

  return (
    
    <>
   
    
    <NavBar />
    <div className="glass-wrapper container my-4 p-3 p-md-5">

  {/* your existing components here */}
  

    <div className="main-container">
      <nav className="nav-buttons">
        <button
          className={view === 'summary' ? 'active' : ''}
          onClick={() => setView('summary')}
        >
          Summary
        </button>
        <button
          className={view === 'notes' ? 'active' : ''}
          onClick={() => setView('notes')}
        >
          Notes
        </button>

        <button
          className={view === 'quiz' ? 'active' : ''}
          onClick={() => setView('quiz')}
        >
          Quiz
        </button>
        
        
      </nav>

      <div className="content-area">
        {view === 'quiz' && <QuizApp />}
        {view === 'notes' && <NotesApp />}
        {view === 'summary' && <SummaryApp />}
        <p>If it is not working we might be facing one of the issues: 
          Youtube Blocking IP address,
          Proxies getting banned,
          Or Some Backened Error,
          In Such cases please watch the working demo on the top right corner.</p>
      </div>
      
    </div>
    </div>
    </>
  );

};

export default App;
