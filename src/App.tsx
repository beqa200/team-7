import { Route, Routes } from "react-router-dom"
import Home from "./views/pages/Home"
import Personal from "./views/pages/Personal"
import Experience from "./views/pages/Experience"
import Education from "./views/pages/Education"
import Result from "./views/pages/Result"
import { useState } from "react"


function App() {

  const [resumeInfo, setResumeInfo] = useState({
    name: "",
    last_name: "",
    bio: "",
    email: "",
    number: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    last_name: false,
    email: false,
    number: false,
    bio: false,
  });

  const [expTouched, setExpTouched] = useState({
    position: false,
    employer: false,
    start_date: false,
    end_date: false,
    info: false,
  });

  const [eduTouched, setEduTouched] = useState({
    education: false,
    degree: false,
    end_date: false,
    info: false,
  });


  const [experienceList, setExperienceList] = useState([{ 
    position: "",
    employer: "",
    start_date: "",
    end_date: "",
    info: "",}]
  );

  const [eduList, setEduList] = useState([{ 
    education: "",
    degree: "",
    end_date: "",
    info: "",}]
  );

  const [preview, setPreview] = useState<string | null>(null);


  return (
    <div>
     <Routes>
      <Route path="/" element = {<Home/>}/>

      <Route path="/personal" element = {<Personal 
      resumeInfo={resumeInfo} 
      setResumeInfo={setResumeInfo} 
      preview={preview} 
      setPreview={setPreview} 
      touched={touched}
      expTouched={expTouched}
      eduTouched={eduTouched}
      setTouched={setTouched}
      experienceList={experienceList}
      eduList={eduList}/>}/>

      <Route path="/experience" element = {<Experience 
      resumeInfo={resumeInfo} 
      setResumeInfo={setResumeInfo} 
      preview={preview} 
      setPreview={setPreview}
      experienceList={experienceList}
      setExperienceList={setExperienceList}
      eduList={eduList}
      touched={touched}
      expTouched={expTouched}
      eduTouched={eduTouched}
      setExpTouched={setExpTouched}/>}/>
      
      <Route path="/education" element = {<Education 
        resumeInfo={resumeInfo} 
        setResumeInfo={setResumeInfo} 
        preview={preview} 
        setPreview={setPreview}
        experienceList={experienceList}
        eduList={eduList}
        setEduList={setEduList}
        touched={touched}
        expTouched={expTouched}
        eduTouched={eduTouched}
        setEduTouched={setEduTouched}
      />}/>
      <Route path="/result" element = {<Result />}/>
     </Routes>
    </div>
  )
}

export default App
