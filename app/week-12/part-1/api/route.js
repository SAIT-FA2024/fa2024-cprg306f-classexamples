export function GET(){
    const text = "Hello World!";
    return new Response(text);
}

export async function POST(request){
    const data = await request.text();
    return new Response( data );
}

export function PUT(){

}