import React from 'react'
import "./background.css"
import NavBar from '../../components/NavBar/NavBar'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ReactSVG } from 'react-svg'

const ParallaxHomePage = () => (
  <Parallax>
      <ReactSVG src="background.svg" />
  </Parallax>
);

function HomePage (){
  
  //const time = Math.random() * 5 - 5;
  //const cloud1 = document.querySelector('#cloud1');
  //cloud1.style.setProperty('--animation-time', time +'s');

  
  return(
    <ParallaxProvider>
      <NavBar title="Welcome to my website!"/>
      <ParallaxHomePage/>
    </ParallaxProvider> 
    
  )
}

export default HomePage;