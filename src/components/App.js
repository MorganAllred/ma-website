import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Portal from './Portal/Portal';

const App = () => {
  const [navSelection, updateNavSelection] = useState('Home');

  useEffect(()=>{
    document.body.style.backgroundColor = "#dddddd";
    document.body.style.margin = "0";
  }, []);

  const handleNavClick = (event) => {
    updateNavSelection(event.target.id);
  }

  return (
    <>
      <Header />
      <Navbar 
        click={handleNavClick}
        navOptions= {[
          'Home', 
          'Projects', 
          'Game', 
          'Contact'
        ]} 
      />
      <Portal option={navSelection}/>
    </>
  );
}

export default App;
