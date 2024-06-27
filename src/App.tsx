import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Personal from "./pages/Personal"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Result from "./pages/Result"
import { useState } from "react"


function App() {

  const [resumeInfo, setResumeInfo] = useState({
    name: "",
    surname: "",
    about: "",
    email: "",
    number: "",
    photo: null as File | null
  });

  const [preview, setPreview] = useState<string | null>(null);


  return (
    <div>
     <Routes>
      <Route path="/" element = {<Home/>}/>

      <Route path="/personal" element = {<Personal 
      resumeInfo={resumeInfo} 
      setResumeInfo={setResumeInfo} 
      preview={preview} 
      setPreview={setPreview} />}/>

      <Route path="/experience" element = {<Experience 
      resumeInfo={resumeInfo} 
      setResumeInfo={setResumeInfo} 
      preview={preview} 
      setPreview={setPreview}/>}/>
      
      <Route path="/education" element = {<Education />}/>
      <Route path="/result" element = {<Result />}/>
     </Routes>
    </div>
  )
}

export default App
