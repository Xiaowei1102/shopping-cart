import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";
import { HomeBar } from './HomeBar';

function App(props) {
//  const [count, setCount] = useState(0)

  return (
    <>
      <div className='homePageTitle'>Fashion and Taste That Never Get Old</div>
      <div className='menTitle'>MEN</div>
      <div className='homeImages men'>
        <img src="/src/assets/front1.jpg" alt="home image man1" />
        <img src="src/assets/front2.jpg" alt="home image man2" />
        <img src="src/assets/front3.jpg" alt="home image man3" />
      </div>
      <div className='womenTitle'>WOMEN</div>
      <div className='homeImages women'>
        <img src="src/assets/front4.jpg" alt="home image woman1" />
        <img src="src/assets/front5.jpg" alt="home image woman2" />
        <img src="src/assets/front6.jpg" alt="home image woman3" />
      </div>
      <footer className='footer'>&copy; 2023 All Rights Reserved</footer>
    </>
  )
}

export default App
