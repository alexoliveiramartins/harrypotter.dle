import React, { useEffect, useState } from 'react';
import characterData from '../assets/output.json';
import Guess from './Guess';
import AtributesTitle from './AtributesTitles';

export default function InputBox({correctAnswer, playing, setPlaying}) {
    const [inputValue, setInputValue] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [characters, setCharacters] = useState(characterData);
    const [guesses, setGuesses] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const filtered = characters.filter(character => 
            character.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            (character.alias && character.alias.toLowerCase().includes(inputValue.toLowerCase()))
        );
        setFilteredNames(filtered);
        setSelectedIndex(0);
        // console.log("selected: ", selectedIndex);
    }, [inputValue, characters]);

    // mudar local storage pelas guesses
    useEffect(() => {
        if (guesses.length > 0) {
            const guessNames = guesses.map(guess => guess.name);
            localStorage.setItem('guesses', JSON.stringify(guessNames));
        }
    }, [guesses]);

    useEffect(() => {
        const savedGuessNames = JSON.parse(localStorage.getItem('guesses') || '[]');
        const savedGuesses = savedGuessNames.map(name => 
            characters.find(character => character.name === name)
        ).filter(Boolean);
    
        setGuesses(savedGuesses);
    
        const remainingCharacters = characters.filter(character => 
            !savedGuessNames.includes(character.name)
        );
        setCharacters(remainingCharacters);
    }, []);

    // lidar quando o texto muda no inputbox
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // quando você clica no personagem na lista dropdown
    const handleClick = (characterName) => {
        setInputValue(characterName);
        const selectedCharacter = characters.find(character => character.name === characterName)
        // console.log(selectedCharacter.alias)
        setGuesses(prevGuesses => [selectedCharacter, ...prevGuesses])
        const newCharacters = characters.filter(character =>
            character.name.toLowerCase() !== characterName.toLowerCase()
        );
        setCharacters(newCharacters);
        setInputValue('');
    }

    // quando você aperta enter
    // setinha tbm
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredNames.length > 0) {
            handleClick(filteredNames[selectedIndex].name);
        } else if (e.key === 'ArrowDown') {
            setSelectedIndex(prevIndex => 
                prevIndex < filteredNames.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : 0);
        }
    }
    // console.log('InputBox - correctAnswer:', correctAnswer);

    return (
        <div className="w-full space-y-2 relative">
            {playing && <label htmlFor="UserEmail" className="text-gray-100 block text-2xl font-medium mb-2">
                Enter character name
            </label>}
            <div>
                {playing && <input
                    type="text"
                    id="UserEmail"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Character name, alias"
                    className="w-full px-4 py-3 text-xl rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />}
                {inputValue.length > 0 && (
                <ul className='absolute w-full max-w-screen z-20 max-h-screen overflow-y-scroll bg-slate-50'>
                    {filteredNames.map((character, index) => (
                        <li 
                        onClick={() => handleClick(character.name)} 
                        className={`items-center flex space-x-2 flex-row p-2 ${index === selectedIndex ? 'bg-slate-200' : 'hover:bg-slate-100'}`}
                        key={`${character.id}-${index}`}
                        onMouseEnter={() => setSelectedIndex(index)}>
                            <img className="size-14 rounded-md shadow-sm w-15 h-15" src={character.image}></img>
                            <span>{character.name}</span>
                            {character.alias && character.alias !== "" && (
                                <span className='text-slate-400'>
                                    {` aka.: ${character.alias}`}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                )}
            </div>
            <div className='flex flex-col overflow-x-auto'>
                <AtributesTitle/>
                <div className='space-y-2'>
                {guesses.map((guess, index) => (
                    <Guess key={index} setPlaying={setPlaying} character={guess} correctAnswer={correctAnswer} />
                ))}
                </div>
            </div>
        </div>
    );
}