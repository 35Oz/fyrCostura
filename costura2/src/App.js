import React from 'react';
import img from './img/logo.png'
import Gallery from './Gallery';

function App() {
  return (
    <>
    <div className='logoContainer'>
      <img src={img}/>
      </div>
      <Gallery/>
    </>

  )
}

export default App;
