"use client"

import { useState } from "react";
import RegistrationForm from "./managed-form";

export default function RegistrationPage(){

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        if(showForm){
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }

    const toggleForm2 = () => showForm ? setShowForm(false) : setShowForm(true);

    return(
        <main className="p-5">
            <h1 className="text-3xl text-center mb-3">Registration</h1>
            {/* { 5 > 10  ? <p>Something</p> : <p>Something Else</p> } */}
            <button onClick={toggleForm2}>Toggle Form</button>
            { showForm && <RegistrationForm /> }
        </main>
    );
}
