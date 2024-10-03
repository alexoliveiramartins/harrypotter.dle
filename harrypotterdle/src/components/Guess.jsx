import Attribute from "./Attribute";
import downArrow from '../assets/down-arrow.svg';
import upArrow from '../assets/up-arrow.svg';
import Gryffindor from '../assets/houses/Gryffindor.webp';
import Slytherin from '../assets/houses/Slytherin.webp';
import Ravenclaw from '../assets/houses/Ravenclaw.webp';
import Hufflepuff from '../assets/houses/Hufflepuff.webp';
import One from '../assets/books/1.webp';
import Two from '../assets/books/2.webp';
import Three from '../assets/books/3.webp';
import Four from '../assets/books/4.webp';
import Five from '../assets/books/5.webp';
import Six from '../assets/books/6.webp';
import Seven from '../assets/books/7.webp';
import Fb from '../assets/books/FB.webp';

export default function Guess({ character, correctAnswer, setPlaying }) {
    // console.log("correct answer", correctAnswer)
    // console.log("correct name:", correctAnswer.name)
    const matchName = character.name === correctAnswer.name;
    const matchSpecies = character.species === correctAnswer.species;
    const matchHouse = character.house === correctAnswer.house;
    const matchPatronus = character.patronus === correctAnswer.patronus;
    const matchGender = character.gender === correctAnswer.gender;
    const matchAppearance = character.first_appearance === correctAnswer.first_appearance;
    const matchBorn = character.born === correctAnswer.born;
    const matchBlood = character.blood === correctAnswer.blood;
    const matchBoggart = character.boggart === correctAnswer.boggart;

    const getBornImage = () => {
        if(matchBorn) return "";
        const bornYear = parseInt(character.born);
        const correctYear = parseInt(correctAnswer.born);
        if(isNaN(bornYear) || isNaN(correctYear)) return "";
        return bornYear > correctYear ? downArrow : upArrow;
    }

    const getHouseImage = () => {
        if(character.house === "Gryffindor") return Gryffindor;
        if(character.house === "Slytherin") return Slytherin;
        if(character.house === "Ravenclaw") return Ravenclaw;
        if(character.house === "Hufflepuff") return Hufflepuff;
    }

    const getBookImage = () => {
        if(character.first_appearance === "Philosopher's Stone") return One;
        if(character.first_appearance === "Chamber of Secrets") return Two;
        if(character.first_appearance === "Prisoner of Azkaban") return Three;
        if(character.first_appearance === "Goblet of Fire") return Four;
        if(character.first_appearance === "Order of the Phoenix") return Five;
        if(character.first_appearance === "Half-Blood Prince") return Six;
        if(character.first_appearance === "Deathly Hallows") return Seven;
        if(character.first_appearance === "Fantastic Beasts") return Fb;
    }

    if(matchAppearance && matchBlood && matchBoggart && matchBorn && matchGender && matchHouse && matchName && matchPatronus && matchSpecies){
        setPlaying(false);
    }

    return (
        <div className="grid grid-cols-9 gap-2 w-full justify-evenly min-w-max">
            <Attribute name={character.name} character={true} correct={matchName} image={character.image} bgSize={"bg-cover"}/>
            <Attribute name={character.gender} correct={matchGender}/>
            <Attribute name={character.boggart} correct={matchBoggart} />
            <Attribute name={character.blood} correct={matchBlood} />
            <Attribute name={character.born} correct={matchBorn} bgSize={"bg-contain bg-top"} image={getBornImage() /* modify here the image size? */}/>
            <Attribute name={character.house} correct={matchHouse} image={getHouseImage()} bgSize={"bg-contain bg-top"}/>
            <Attribute name={character.species} correct={matchSpecies} />
            <Attribute name={character.patronus} correct={matchPatronus} />
            <Attribute name={character.first_appearance} correct={matchAppearance} opacity={"opacity-70"} image={getBookImage()} bgSize={"bg-cover bg-center"}/>
        </div>
    );
}