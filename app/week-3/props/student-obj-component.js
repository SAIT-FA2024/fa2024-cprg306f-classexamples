

export default function StudentObjComp({studentObj}){

    let {
        studentName:name,
        studentAge:age,
        address: {city, province}
    } = studentObj;

    return(
        <div className="inline-block border border-red-500 bg-green-500 mt-5 mb-10 mx-6 px-5 py-3">
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{city}, <b>{province}</b></p>
        </div>
    );
}