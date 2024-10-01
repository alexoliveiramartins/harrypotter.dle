import AtributesTitle from "./AtributesTitles";
import Attribute from "./Attribute";

export default function Guess({ character, correctAnswer }) {
    console.log("correct answer", correctAnswer)
    console.log("correct name:", correctAnswer.name)
    const matchName = character.name === correctAnswer.name;
    const matchSpecies = character.species === correctAnswer.species;
    const matchHouse = character.house === correctAnswer.house;
    const matchPatronus = character.patronus === correctAnswer.patronus;
    const matchGender = character.gender === correctAnswer.gender;
    const matchAppearance = character.first_appearance === correctAnswer.first_appearance;
    const matchBorn = character.born === correctAnswer.born;
    const matchBlood = character.blood === correctAnswer.blood;
    const matchBoggart = character.boggart === correctAnswer.boggart;



    return (
        <div className="grid grid-cols-9 gap-3 w-full justify-evenly">
            <Attribute name={character.name} correct={matchName} />
            <Attribute name={character.gender} correct={matchGender} />
            <Attribute name={character.boggart} correct={matchBoggart} />
            <Attribute name={character.blood} correct={matchBlood} />
            <Attribute name={character.born} correct={matchBorn} />
            <Attribute name={character.house} correct={matchHouse} />
            <Attribute name={character.species} correct={matchSpecies} />
            <Attribute name={character.patronus} correct={matchPatronus} />
            <Attribute name={character.first_appearance} correct={matchAppearance} />
        </div>
    );
}
