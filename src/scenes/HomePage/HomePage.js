import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ReactSVG } from 'react-svg'

const ParallaxHomePage = () => (
  <Parallax>
      <ReactSVG src="background.svg" />
  </Parallax>
);

function HomePage (){
  
  return(
    <ParallaxProvider>
      <NavBar title="Welcome to my website!"/>
      <ParallaxHomePage/>
    </ParallaxProvider> 
    
  )
}

 

export default HomePage;