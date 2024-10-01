import React, { useEffect, useState } from 'react';
import characterData from '../assets/output.json';
import Guess from './Guess';
import AtributesTitle from './AtributesTitles';

export default function InputBox({correctAnswer}) {
    const [inputValue, setInputValue] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [characters, setCharacters] = useState(characterData);
    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        const filtered = characters.filter(character => 
            character.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            (character.alias && character.alias.toLowerCase().includes(inputValue.toLowerCase()))
        );
        setFilteredNames(filtered);
    }, [inputValue, characters]);

    // lidar quando o texto muda no inputbox
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // quando você clica no personagem na lista dropdown
    const handleClick = (characterName) => {
        setInputValue(characterName);
        const selectedCharacter = characters.find(character => character.name === characterName)
        console.log(selectedCharacter.alias)
        setGuesses(prevGuesses => [selectedCharacter, ...prevGuesses])
        const newCharacters = characters.filter(character =>
            character.name.toLowerCase() !== characterName.toLowerCase()
        );
        setCharacters(newCharacters);
        setInputValue('');
    }

    // quando você aperta enter
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            const newCharacters = characters.filter(character =>
                character.name.toLowerCase() !== inputValue.toLowerCase()
            );
            setCharacters(newCharacters);
            setInputValue('');
        }
    }
    console.log('InputBox - correctAnswer:', correctAnswer);

    return (
    <div className="w-full space-y-4">
        <label htmlFor="UserEmail" className="block text-2xl font-medium text-gray-700 mb-2">
        Enter character name
        </label>
        <input
            type="text"
            id="UserEmail"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Character name, alias"
            className="w-full px-4 py-3 text-xl rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {inputValue.length > 0 && (
        <ul className='bg-slate-50'>
            {filteredNames.map(character => (
                <li onClick={() => handleClick(character.name)} className='p-2 hover:bg-slate-100' key={character.id}>
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
        <div className='flex flex-col'>
            <AtributesTitle/>
            <div className='space-y-2'>
            {guesses.map((guess, index) => (
                <Guess key={index} character={guess} correctAnswer={correctAnswer} />
            ))}
            </div>
        </div>
    </div>
  );
}