export default function Attribute({ name, correct, image, bgSize, opacity, character }) {
    return (
        <div className="w-full shadow-md rounded-lg overflow-hidden text-balance relative">
            <a className={`
                ${correct ? "bg-green-600" : "bg-red-600"} 
                ${character ? `hover:text-opacity-100 text-opacity-0` : ''} h-20 p-10 border flex justify-center items-center rounded-lg text-white 
                bg-center bg-no-repeat text-center font-semibold relative`}
            >
                <span className={`${character ? `bg-opacity-0 bg-slate-600 hover:bg-opacity-60` : ''} relative rounded z-10`}>{name}</span>
                <span 
                    className={`${bgSize ? bgSize : "bg-cover"} absolute inset-0 bg-center bg-no-repeat bg-cover ${opacity ? opacity : ""}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></span>
            </a>
        </div>
    );
}
