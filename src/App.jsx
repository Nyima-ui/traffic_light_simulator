
import { useState } from 'react';
import './App.css'

function App() {
  const lightColors = ["bg-red-600", "bg-yellow-300", "bg-green-500"]; 
  const [currentLightIndex, setCurrentLightIndex] = useState(0); 
  const [lightON, setLightON] = useState([lightColors[currentLightIndex]]); 

  // const simulate = () => {
  //    lightColors.forEach(light => )
  // }

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
       <div className='bg-black gap-10 w-[12rem] rounded-xl flex flex-col items-center justify-around py-7'>
          <div className={`size-30 rounded-full ${lightColors[0] ? lightON : ""}`}></div>
          <div className={`size-30 rounded-full ${lightColors[1] ? lightON : "bg-gray-600"}`}></div>
          <div className={`size-30 rounded-full ${lightColors[2] ? lightON : ""}`}></div>
       </div>
    </div>
  )
}

export default App
