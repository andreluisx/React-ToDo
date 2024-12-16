import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router";
import TaskDetails from './components/TaskDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
        />

    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App/>} />
        <Route path='/task' element={<TaskDetails/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

