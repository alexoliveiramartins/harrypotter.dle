import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Guess from "../components/Guess";
import characterData from '../assets/output.json';
import { useEffect } from "react";
import Wallpaper from '../assets/Wallpaper.webp'

function Home() {
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const randomCharacter = characterData[Math.floor(Math.random() * characterData.length)];
    setCorrectAnswer(randomCharacter);
    console.log(correctAnswer)
  }, []);

  return (
    <div className="w-screen bg-cover h-screen" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="flex flex-col mx-auto items-center py-11 space-y-8 max-w-4xl px-4">
        <h1 className="text-7xl text-white font-harry">Harrypotter.dle</h1>
        {correctAnswer && <h1>{correctAnswer.name}</h1>}
        {correctAnswer && <InputBox correctAnswer={correctAnswer} />}
      </div>
    </div>
  );
}

export default Home;