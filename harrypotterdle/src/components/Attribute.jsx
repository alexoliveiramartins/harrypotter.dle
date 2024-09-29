export default function Attribute({ name, correct }) {
    // console.log(`Attribute: ${name}, Correct: ${correct}`);
    return (
        <div className="w-full">
            <a className={`
                ${correct ? "bg-green-600" : "bg-red-600"}
                flex h-20 w-20 items-center justify-center rounded p-4 text-white 
                text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 
                break-words overflow-hidden text-center`}>
                {name}
            </a>
        </div>
    );
}
