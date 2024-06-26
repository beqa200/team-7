import { Link } from "react-router-dom"
import StyledContainer from "./styles/StyledContainer"
import StyledInput from "./styles/StyledInput"
import StyledLabel from "./styles/StyledLabel"
import StyledSpan from "./styles/StyledSpan"
import UploadPhoto from "./components/UploadPhoto"
import { useState } from "react"

function Personal() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File) => {
      setSelectedFile(file);
  };

  console.log(selectedFile);

     console.log(selectedFile)
  return (
    <StyledContainer>
      <div className="form-container">
        <Link to={'/'}><img src="/images/back-arrow.svg" alt="arrow icon" /></Link>
        <form>
          <div className="title">
            <h2>პირადი ინფო</h2>
            <span>1/3</span>
          </div>

            <section >
              <div>
                <StyledLabel htmlFor="">სახელი</StyledLabel>
                <StyledInput type="text" placeholder="შეიყვანეთ სახელი"/>
                <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              </div>
              <div>
                <StyledLabel htmlFor="">გვარი</StyledLabel>
                <StyledInput type="text" placeholder="შეიყვანეთ გვარი"/>
                <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              </div>

            </section>
            <UploadPhoto onFileChange={handleFileChange}/>
        </form>
      </div>
      <div className="result">

      </div>
      
    </StyledContainer>
  )
}

export default Personal
