
import './App.css';

import React from 'react'
import {Blog,Header,Footer,Possibility,WhatGPT3,Feature} from './container';
import { CTa,Brand, Navbar } from './components';

const App = () => { 
  return (
    <div  className='App'>
    <div className='gradient_bg'>
     <Navbar/>
     <Header/>

    </div>
    <Brand/>
    <Feature/>
    <WhatGPT3/>
    <Possibility/>
    <CTa/>
    <Blog/>
    <Footer/>
   

    </div>
  )
}

export default App

