import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Personal from "./pages/Personal"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Result from "./pages/Result"


function App() {

  return (
    <div>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/personal" element = {<Personal />}/>
      <Route path="/experience" element = {<Experience />}/>
      <Route path="/education" element = {<Education />}/>
      <Route path="/result" element = {<Result />}/>
     </Routes>
    </div>
  )
}

export default App
