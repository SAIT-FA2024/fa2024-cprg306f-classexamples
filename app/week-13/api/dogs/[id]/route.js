import { neon } from "@neondatabase/serverless";

export async function GET(request, {params} ){
    const { id } = await params;
    const idNum = Number(id);
    // fetch all dogs from database
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    const response = await sql`SELECT * FROM dogs;`;

    const thisDog = response.find( (dog) => dog.id === idNum );
    if(!thisDog){
        return new Response("This dog does not exist.", {status:404} );
    }
    return new Response( JSON.stringify(thisDog), {status:200} );
}

export async function PUT(request, {params}){
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    // TODO: validation 
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    const response = await sql`
    UPDATE dogs SET name = ${dog.name}, age = ${dog.age} WHERE id = ${idNum}
    RETURNING *;`;
    // update dog number idNum on the database
    return new Response(JSON.stringify(response), {status: 200});
}

export async function PATCH(request, {params}){
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    // TODO: Validation
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    if (dog.name) {
        // update dog name in the database for dog number [idNum]
        await sql`UPDATE dogs SET name = ${dog.name} WHERE id = ${idNum};`;
    }
    if (dog.age) {
        // update dog age in the database for dog number [idNum]
        await sql`UPDATE dogs SET age = ${dog.age} WHERE id = ${idNum};`;
    }
    return new Response(null, {status: 204});
}

export async function DELETE(request, {params}){
    const { id } = await params;
    const idNum = Number(id);
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    await sql`DELETE FROM dogs WHERE id = ${idNum}`;
    // delete dog from database using idNum
    return new Response(null, {status: 204});
}