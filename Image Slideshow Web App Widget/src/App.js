import React from 'react';
import './App.css';
import { sliderData } from './components/sliderdata'
import { Reactslider } from './components/reactslider';

function App() {
  return (
	  <div>
		  <Reactslider slides = { sliderData }></Reactslider>
	  </div>	
	);
}

export default App;