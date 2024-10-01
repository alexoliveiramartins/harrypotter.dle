import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Guess from "../components/Guess";
import characterData from '../assets/output.json';
import { useEffect } from "react";

function Home() {
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const randomCharacter = characterData[Math.floor(Math.random() * characterData.length)];
    setCorrectAnswer(randomCharacter);
    console.log(correctAnswer)
  }, []);

  return (
    <div className="flex flex-col mx-auto items-center py-11 space-y-8 max-w-4xl px-4 bg-red-50">
      <h1 className="text-5xl font-bold">Harrypotter.dle</h1>
      {correctAnswer && <h1>{correctAnswer.name}</h1>}
      {correctAnswer && <InputBox correctAnswer={correctAnswer} />}
    </div>
  );
}

export default Home;