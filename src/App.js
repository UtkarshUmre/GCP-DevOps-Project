import React from 'react';
import './App.css'; // Import your global styles
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects'; // Import Projects component
import Contact from './Contact'; // Import Contact component

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <About />
        <Projects /> {/* Render Projects component */}
        <Contact /> {/* Render Contact component */}
      </main>
      <footer>
        <p>&copy; 2024 Utkarsh Umre</p>
      </footer>
    </div>
  );
}

export default App;
