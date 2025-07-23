import React, { useState } from 'react';
import '../styles/QuizAppStyles.css';
import { fetchFromBackend } from '../backend_integration/api';

const QuizApp = () => {
  const [url, setUrl] = useState('');
  const [quiz, setQuiz] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuiz('');
    setError('');

    const result = await fetchFromBackend(url, 3);

    if (result.success) {
      setQuiz(result.data);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="mx-auto shadow bg-white rounded-4 p-4" style={{ maxWidth: '720px' }}>
        <h2 className="text-center fw-bold mb-4 d-flex align-items-center justify-content-center">
          <span className="me-2">🎯</span> Generate Quiz from YouTube
        </h2>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Paste YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-dark px-4" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Generate'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="mt-4 d-flex justify-content-center align-items-center gap-2">
          <div className="spinner-border text-dark" role="status" />
          <span className="fw-semibold text-dark">Generating...</span>
        </div>
      )}

      {quiz && (
        <div className="mt-4 p-4 border rounded-4 shadow-sm bg-white">
          <h4 className="mb-3 d-flex align-items-center fw-semibold text-dark">
            <span className="me-2">❓</span> Quiz
          </h4>
          <pre className="mb-0 text-secondary" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {quiz}
          </pre>
        </div>
      )}

      {error && (
        <div className="mt-4 alert alert-danger">
          {error}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
