import React from "react";

export default function Answer( {character} ){
    return(
        <div className="items-center overflow-hidden bg-opacity-90 border-y-red-300 flex flex-col space-y-4 bg-white rounded p-10 w-1/2 h-1/2">
            <p>You Won! Today's character was <a className="font-semibold">{character.name}</a></p>
            <div className="items-center size-fit flex overflow-hidden rounded">
                <img className="rounded-lg aspect-square object-cover object-top" src={character.image}></img>
            </div>
        </div>
    );
}