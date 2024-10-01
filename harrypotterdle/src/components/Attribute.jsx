export default function Attribute({ name, correct }) {
    // console.log(`Attribute: ${name}, Correct: ${correct}`);
    return (
        <div className="w-full">
            <a className={`
                ${correct ? "bg-green-600" : "bg-red-600"}
                shadow-md h-20 p-10 border flex justify-center items-center rounded text-white`}>
                {name}
            </a>
        </div>
    );
}
