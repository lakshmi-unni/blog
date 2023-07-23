import React from 'react';
import './App.css';
import BlogCard from './components/BlogCard';
import NavbarComponent from './components/NavbarComponent'
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <div className='App' style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}> */}
      <NavbarComponent />
      <main className="py-4">
        <BlogCard />
      </main>
      <footer>welcome</footer>

      <div style={{ flexGrow: 1 }} />
      <Footer />
      {/* </div> */}


    </>
  );
}

export default App;
