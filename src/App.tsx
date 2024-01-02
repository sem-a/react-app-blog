import React from 'react';
import Header from './components/Header';
import './css/main.scss';
import './css/reset.scss';
import Title from './components/Title';
import Article from './components/Article';
import AdditionalMenu from './components/AdditionalMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <div className="app_grid_container">
          <Article />
          <AdditionalMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
