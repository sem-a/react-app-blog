import React from 'react';
import Header from './components/Header';
import './css/main.scss';
import './css/reset.scss';
import Title from './components/Title';
import AdditionalMenu from './components/AdditionalMenu';
import Articles from './components/Articles';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <div className="app_grid_container">
          <Articles />
          <AdditionalMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
