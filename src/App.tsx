import React from 'react';
import Header from './components/Header';
import './css/main.scss';
import './css/reset.scss';
import Title from './components/Title';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <Article />
      </div>
    </div>
  );
}

export default App;
