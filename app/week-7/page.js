"use client"

import { useState } from "react";
import dogData from "./dogs.json";
import DogList from "./dog-list";

export default function AdoptionPage(){

    // Defensive Copy
    let dogArray = dogData.map( (dog) => ( {...dog} ) );
    // Create state variable with copied data
    const [dogList, setDogList] = useState(dogArray);

    return(
        <main>
            <DogList listOfDogs={dogList} />
        </main>
    );
}