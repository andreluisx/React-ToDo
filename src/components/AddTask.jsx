import { useState } from "react"
import { toast } from "react-toastify"
import Input from "./Input"

export default function AddTask({ onCreateTask }){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md  flex flex-col">
            
            <Input value={title} setValue={setTitle} placeholder="Digite o titulo"/>
            <Input value={description} setValue={setDescription} placeholder="Digite a descrição"/>
            
            <button onClick={()=>{
                if(title.trim() && description.trim()){
                    onCreateTask(title, description); 
                    setTitle(''); 
                    setDescription('')   
                }
                else{
                    toast.warn('nenhum campo pode ficar vazio')
                }
                }
                } className="w-full text-white bg-slate-500 rounded-md p-2 font-medium">Adicionar</button>
        </div>
    )
}