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
  const [date, setDate] = useState(localStorage.getItem('date'));

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate())

    const todayString = today.getDate().toString();
    const storedDate = localStorage.getItem('date');

    // console.log("Today's date:", todayString);
    // console.log("Stored date:", storedDate);

    if (storedDate !== todayString) {
      // console.log("Date has changed, clearing local storage")
      localStorage.removeItem('guesses');
      localStorage.setItem('date', todayString);
      setDate(todayString);
    } else {
      setDate(storedDate);
    }

    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const randomIndex = seed % characterData.length;
    setCorrectAnswer(characterData[randomIndex]);
  }, []);

  // console.log(correctAnswer);

  return (
    <div className="w-screen h-screen bg-cover overflow-y-auto" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="flex flex-col mx-auto items-center py-11 space-y-8 max-w-4xl px-4">
        <h1 className="text-7xl text-white font-harry">Harrypotter.dle</h1>
        {!playing ? <Answer character={correctAnswer}/>: ""}
        {correctAnswer && <InputBox setPlaying={setPlaying} playing={playing} correctAnswer={correctAnswer} />}
      </div>
      <div 
      className="opacity-75 min-w-max flex font-light flex-row items-center space-x-1 justify-center text-gray-50">
        <footer>made by
        </footer>
        <a 
          href="https://github.com/alexoliveiramartins" 
          className="font-semibold decoration-dotted underline">
            alex
          </a>
      </div>
    </div>
  );
}

export default Home;