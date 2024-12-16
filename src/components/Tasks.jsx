import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function Task({tasks, onTaskClick, onDeletTask}) {
    const navigate = useNavigate()

    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    
                    <li key={task.id} className="flex gap-2" >
                        <button 
                            onClick={()=>onTaskClick(task.id)} 
                            className={task.isCompleted 
                                ? 'bg-green-400 text-white p-2 rounded-md w-full font-bold line-through break-words overflow-hidden text-ellipsis max-w-full'
                                : 'bg-slate-400 text-white p-2 rounded-md w-full font-bold break-words overflow-hidden text-ellipsis max-w-full'
                            }
                        >
                          {task.title}
                        </button>
                        <button 
                            onClick={()=>{navigate(`/task?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}&isDone=${encodeURIComponent(task.isCompleted)}`)}} 
                            className="bg-slate-400 p-2 rounded-md text-white"
                        >
                            <ChevronRightIcon/>
                        </button>
                        
                        <button 
                            className="bg-red-400 p-2 rounded-md text-white" 
                            onClick={()=>onDeletTask(task.id)}
                        >
                            <TrashIcon/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
