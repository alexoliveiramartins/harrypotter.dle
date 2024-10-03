import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Guess from "../components/Guess";
import characterData from '../assets/output.json';
import { useEffect } from "react";
import Wallpaper from '../assets/Wallpaper.webp';
import Answer from '../components/Answer';

function Home() {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    console.log("you won!!");
    
  }, [playing]);
  
  useEffect(() => {
    const randomCharacter = characterData[Math.floor(Math.random() * characterData.length)];
    setCorrectAnswer(randomCharacter);
  }, []);

  console.log(correctAnswer);

  return (
    <div className="w-screen h-screen bg-cover overflow-y-auto" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="flex flex-col mx-auto items-center py-11 space-y-8 max-w-4xl px-4">
        <h1 className="text-7xl text-white font-harry">Harrypotter.dle</h1>
        {!playing ? <Answer character={correctAnswer}/>: ""}
        {correctAnswer && <InputBox setPlaying={setPlaying} playing={playing} correctAnswer={correctAnswer} />}
      </div>
      <div 
      class="opacity-75 min-w-max flex font-light flex-row items-center space-x-1 justify-center text-gray-50">
        <footer class="">made by
        </footer>
        <a 
          href="https://github.com/alexoliveiramartins" 
          class="font-semibold decoration-dotted underline">
            alex
          </a>
      </div>
    </div>
  );
}

export default Home;