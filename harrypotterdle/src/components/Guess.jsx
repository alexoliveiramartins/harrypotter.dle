import Attribute from "./Attribute";

export default function Guess({ character, correctAnswer }) {
    console.log("correct answer", correctAnswer)
    console.log("correct name:", correctAnswer.name)
    const matchName = character.name === correctAnswer.name;
    const matchSpecies = character.species === correctAnswer.species;
    const matchHouse = character.house === correctAnswer.house;
    const matchPatronus = character.patronus === correctAnswer.patronus;
    const matchGender = character.gender === correctAnswer.gender;
    const matchAppearance = character.appearance === correctAnswer.appearance;

    return (
        <div className="flex h-16 shrink justify-self-center grow-0 text-balance space-x-5">
            <Attribute name={character.name} correct={matchName} />
            <Attribute name={character.species} correct={matchSpecies} />
            <Attribute name={character.house} correct={matchHouse} />
            <Attribute name={character.patronus} correct={matchPatronus} />
            <Attribute name={character.gender} correct={matchGender} />
            <Attribute name={character.appearance} correct={matchAppearance} />
        </div>
    );
}
