import { Route, Routes } from "react-router-dom"
import Home from "./views/pages/Home"
import Personal from "./views/pages/Personal"
import Experience from "./views/pages/Experience"
import Education from "./views/pages/Education"
import Result from "./views/pages/Result"
import { useState } from "react"


function App() {

  const [general, setGeneral] = useState({
    name: "",
    last_name: "",
    bio: "",
    email: "",
    number: "",
    photo: ""
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


  const [experience, setExperience] = useState([{ 
    position: "",
    employer: "",
    start_date: "",
    end_date: "",
    info: "",}]
  );

  const [education, setEducation] = useState([{ 
    education: "",
    degree: "",
    end_date: "",
    info: "",}]
  );

  const [photo, setPhoto] = useState<string | null>(null);


  return (
    <div>
     <Routes>
      <Route path="/" element = {<Home/>}/>

      <Route path="/personal" element = {<Personal 
      general={general} 
      setGeneral={setGeneral} 
      photo={photo} 
      setPhoto={setPhoto} 
      touched={touched}
      expTouched={expTouched}
      eduTouched={eduTouched}
      setTouched={setTouched}
      experience={experience}
      education={education}/>}/>

      <Route path="/experience" element = {<Experience 
      general={general} 
      setGeneral={setGeneral} 
      photo={photo} 
      setPhoto={setPhoto}
      experience={experience}
      setExperience={setExperience}
      education={education}
      touched={touched}
      expTouched={expTouched}
      eduTouched={eduTouched}
      setExpTouched={setExpTouched}/>}/>
      
      <Route path="/education" element = {<Education 
        general={general} 
        setGeneral={setGeneral} 
        photo={photo} 
        setPhoto={setPhoto}
        experience={experience}
        education={education}
        setEducation={setEducation}
        touched={touched}
        expTouched={expTouched}
        eduTouched={eduTouched}
        setEduTouched={setEduTouched}
      />}/>
      <Route path="/result" element = {<Result 
        general={general} 
        photo={photo} 
        experience={experience}
        education={education}
        touched={touched}
        expTouched={expTouched}
        eduTouched={eduTouched}/>}/>
     </Routes>
    </div>
  )
}

export default App
