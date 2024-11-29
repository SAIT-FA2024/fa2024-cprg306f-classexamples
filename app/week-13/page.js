"use client"
import { useEffect, useState } from "react";

export default function DogPage(){

    const [dogList, setDogList] = useState([]);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);
    const handleChangeName = (event) => setDogName(event.target.value);
    const handleChangeAge = (event) => setDogAge(event.target.value);
    const handleSubmit = async (event) => {
        event.preventDefault();
        let newDogObj = {
            name: dogName,
            age: dogAge
        }
        const request = new Request("http://localhost:3000/week-13/api/dogs", {
            method: "POST",
            body: JSON.stringify(newDogObj)
        } );
        try {
            const response = await fetch(request);
            if(response.ok) console.log("success!");
        } catch (error) {
            console.log(error);
        }
       

        getAllDogs();
    }

    async function deleteDog(idNum){
        const request = new Request(`http://localhost:3000/week-13/api/dogs/${idNum}`, {
            method: "DELETE"
        } );
    }

    async function getAllDogs(){
        try {
            const response = await fetch("http://localhost:3000/week-13/api/dogs");
            if (!response.ok) console.log(response.error);
            const data = await response.json();
            setDogList(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getAllDogs();
    }, [] );

    return(
        <main className="p-5">
            <header>
                <h1>Dog Control Panel</h1>
            </header>
            <section>
                {
                    dogList.map( (dog) => (
                        <div key={dog.id} className="border-b-2">
                            <p>Name: {dog.name}</p>
                            <p>Age: {dog.age}</p>
                        </div>
                    ) )
                }
            </section>
            <form onSubmit={handleSubmit} className="p-5 bg-slate-300">
                <h2>Add New Dog</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={handleChangeName} value={dogName} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={handleChangeAge} value={dogAge} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}