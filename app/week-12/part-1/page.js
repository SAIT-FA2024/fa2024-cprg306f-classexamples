export default async function BasicApiCallPage(){
    let data = "";
    try {
        const response = await fetch("http://localhost:3000/week-12/part-1/api");
        if(!response.ok){
            data = "Data could not be retrieved.";
        } else {
            data = await response.text();
        }
    } catch (error) {
        console.log(error);
    }
    return(
        <main>
            <h1>Week 12 Part 1</h1>
            <p>{data}</p>

            <form method="POST" action="http://localhost:3000/week-12/part-1/api">
                <div>
                    <label>Test Input</label>
                    <input type="text" name="input_name" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </main>
    );
}