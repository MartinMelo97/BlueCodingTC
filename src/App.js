import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/homepage';

function App() {
  const [searchHistory, setSearchHistory] = useState([])

  const handleAddSearchHistoryEntry = (searchValue) => {
    const historyEntry = {
      value: searchValue,
      datetime: new Date().toISOString()
    }
    const newValues = [...searchHistory, historyEntry] 
    setSearchHistory(newValues)
  }

  return (
    <Routes>
      <Route path='/' element={<Homepage handleAddSearchHistoryEntry={handleAddSearchHistoryEntry} history={searchHistory} />} />
    </Routes>
  );
}

export default App;
