import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router"

export default function TaskDetails(){
    const params = new URLSearchParams(window.location.search)
    const title = params.get('title')
    const description = params.get('description')
    const isDone = params.get('isDone') === 'true'
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    
    return(
        <div className='w-screen h-screen flex justify-center p-6 bg-slate-950'>  
            <div className='w-[500px]'>
                <div className="justify-center relative">
                    <button onClick={goBack} className="absolute top-2 left-0 bottom-0">
                        <ChevronLeftIcon/>
                    </button>
                    <h1 className="text-slate-100 text-3xl font-bold text-center ">
                    Detalhes da Tarefa
                    </h1>
                    <div></div>
                </div>
                <div className={`mt-7 space-y-6 p-5 bg-slate-200 rounded-md ${isDone == true ? 'border-b-4 border-green-400' : '' }` }>
                    <h1 className='font-bold text-xl text-slate-600'>{title}</h1>
                    <h4 className='text-lg text-slate-600'>{description}</h4>
                </div>
            </div>
        </div>
    )
}
