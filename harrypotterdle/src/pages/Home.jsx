import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Guess from "../components/Guess";
import characterData from '../assets/characters.json';
import { useEffect } from "react";

function Home() {
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const randomCharacter = characterData[Math.floor(Math.random() * characterData.length)];
    setCorrectAnswer(randomCharacter);
  }, []);

  return (
    <div className="flex flex-col mx-auto items-center py-10 space-y-8 w-full max-w-2xl px-4">
      <h1 className="text-5xl font-bold">Harrypotter.dle</h1>
      {correctAnswer && <h1>{correctAnswer.name}</h1>}
      {correctAnswer && <InputBox correctAnswer={correctAnswer} />}
    </div>
  );
}

export default Home;