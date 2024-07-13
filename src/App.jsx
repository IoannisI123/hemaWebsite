import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Logo/Logo'
import Navbar from './Nav/Navbar'
import Header from './Header/Header'
import Banner from './Carousel/Carousel'
import Carousel from './Carousel/Carousel'


function App() {
  return (
    <div>
 <Logo></Logo>
<Navbar></Navbar>
<Carousel></Carousel>

</div>

  );
}

export default App
