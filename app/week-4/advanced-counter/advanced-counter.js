

export default function AdvCounter({currentCount, incrementCounterFunction, resetCounterFunction}){

    let btnDisable = false;
    if(currentCount >= 10){
        btnDisable = true;
    }

    let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"

    return (
        <div className="bg-slate-300 p-5">
            <h2 className="text-2xl">Simple Counter</h2>
            <p className="text-lg">Count: {currentCount}</p>
            <button className={btnStyles} onClick={incrementCounterFunction} disabled={btnDisable}>Increment!</button>
            <button className={btnStyles} onClick={resetCounterFunction}>Reset Counter</button>
        </div>
    );
}