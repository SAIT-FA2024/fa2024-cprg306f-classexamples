import {z} from "zod";

export async function GET(){
    try {
        // fetch all dogs from database
        // SELECT * FROM dogs
    } catch (error) {
        return new Response(null, {status: 500 });
    }
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 },
    ];
    return new Response( JSON.stringify(dogs), {status: 200} );
}

export async function POST(request){
    let newDog = await request.json();
    // validate incoming data
    // if( typeof newDog.name != 'string' || !newDog.name instanceof String ){
    //     // error handling
    // }
    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );
    try {
        newDogSchema.parse(newDog);
    } catch (error) {
        return new Response(null, {status: 406} );
    }
    // add newDog to database
    newDog.id = 4;
    // const newDogRef = collection(db, "dogs");
    // newDog.name = " ”; DROP TABLE dogs;-- ";
    // INSERT INTO dogs (id,name,age) VALUES (${newDog.id}, "" ; DROP TABLE dogs;--, ${newDog.age})
    return new Response( JSON.stringify(newDog), {status: 201} );
}