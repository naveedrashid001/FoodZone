import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
      <Body searchTerm={searchTerm} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
