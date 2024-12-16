

export default function Input({value, setValue, placeholder}){
    return <input 
            value={value} 
            onChange={(event)=>setValue(event.target.value)}
            placeholder={placeholder}
            className="bg-white rounded-md p-2 text-black border-slate-400 border-2 outline-slate-400 px-4"
        />
}