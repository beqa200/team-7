import { Link } from "react-router-dom"
import StyledInput, { StyledBigInput, StyledLongInput } from "./styles/StyledInput"
import StyledLabel from "./styles/StyledLabel"
import StyledSpan from "./styles/StyledSpan"
import UploadPhoto from "./components/UploadPhoto"
import { useState } from "react"
import StyledButton from "./styles/StyledButton"
import StyledPersonal from "./styles/StyledPersonal"

function Personal() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File) => {
      setSelectedFile(file);
  };

  console.log(selectedFile);

  return (
    <StyledPersonal>
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

            <div className="about-section">
              <StyledLabel htmlFor="">ჩემ შესახებ (არასავალდებულო)</StyledLabel>
              <StyledBigInput type="text" placeholder="ზოგადი ინფო შენ შესახებ"/>
            </div>

            <div className="email-section">
              <StyledLabel htmlFor="">ელ. ფოსტა</StyledLabel>
              <StyledLongInput type="text" placeholder="anzorr666@redberry.ge"/>
              <StyledSpan>უნდა მთავრდებოდეს @redberry.ge-ით</StyledSpan>
            </div>

            <div className="number-section">
              <StyledLabel htmlFor="">მობილურის ნომერი</StyledLabel>
              <StyledLongInput type="text" placeholder="+995 551 12 34 56"/>
              <StyledSpan>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</StyledSpan>
            </div>

            <Link to={'/experience'} className="next"><StyledButton>შემდეგი</StyledButton></Link>
        </form>
      </div>
      <div className="result">

      </div>
      
    </StyledPersonal>
  )
}

export default Personal
