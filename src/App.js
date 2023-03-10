import React from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Services />
      </main>
    </React.Fragment>
  );
}

export default App;
