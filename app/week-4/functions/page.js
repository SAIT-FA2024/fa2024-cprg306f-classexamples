

export default function FunctionsPage(){

    function helloWorld(username, dayOfWeek) {
        // return "Hello World! Welcome back " + username + ", today is " + dayOfWeek;
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a + b;

    const louder = (textFunc, username, day) => {
        let thisText = textFunc(username, day);
        return thisText.toUpperCase();
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return (
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Friday")}</p>
            <p>{helloWorld2("Jeremy", "Wednesday")}</p>
            <p>{helloWorld3("John")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder( helloWorld3, "Robert" )}</p>
            <p>{louder( helloWorld2, "Anne", "Wednesday" )}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(5)}</p>
        </main>
    );
}