import { useEffect, useRef, useState } from 'react';

function App() {
  const lightColors = ["bg-red-600", "bg-yellow-300", "bg-green-500"];
  const [lightON, setLightON] = useState(lightColors[0]);
  const currentRef = useRef(0);

  useEffect(() => {
    const cycleLights = () => {
      const currentIndex = currentRef.current;
      setLightON(lightColors[currentIndex]);

      let delay = 1000;
      if (currentIndex === 0) delay = 4000;
      else if (currentIndex === 1) delay = 1000;
      else if (currentIndex === 2) delay = 3000;

      setTimeout(() => {
        currentRef.current = (currentIndex + 1) % lightColors.length;
        cycleLights();
      }, delay);
    };

    cycleLights();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
      <div className="bg-black gap-10 w-[12rem] rounded-xl flex flex-col items-center justify-around py-7">
        <div className={`size-28 rounded-full ${lightON === lightColors[0] ? lightColors[0] : "bg-gray-600"}`}></div>
        <div className={`size-28 rounded-full ${lightON === lightColors[1] ? lightColors[1] : "bg-gray-600"}`}></div>
        <div className={`size-28 rounded-full ${lightON === lightColors[2] ? lightColors[2] : "bg-gray-600"}`}></div>
      </div>
    </div>
  );
}

export default App;

