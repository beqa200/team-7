import { Link } from "react-router-dom";
import StyledInput, { StyledBigInput, StyledLongInput } from "./styles/StyledInput";
import StyledLabel from "./styles/StyledLabel";
import StyledSpan from "./styles/StyledSpan";
import UploadPhoto from "./components/UploadPhoto";
import { useState } from "react";
import StyledButton from "./styles/StyledButton";
import StyledPersonal from "./styles/StyledPersonal";
import Resume from "./components/Resume";

function Personal() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setResumeInfo((prevState) => ({
      ...prevState,
      photo: file
    }));
  };

  const [resumeInfo, setResumeInfo] = useState({
    name: "ანზორ",
    surname: "მუმლაძე",
    about: "",
    email: "anzorr666@gmail.com",
    number: "+995 597 63 45 16",
    photo: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setResumeInfo((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", resumeInfo.name);
    formData.append("surname", resumeInfo.surname);
    formData.append("about", resumeInfo.about);
    formData.append("email", resumeInfo.email);
    formData.append("number", resumeInfo.number);
    if (resumeInfo.photo) {
      formData.append("photo", resumeInfo.photo);
    }
  };

  console.log(preview, resumeInfo)
  return (
    <StyledPersonal>
      <div className="form-container">
        <Link to={"/"}>
          <img src="/images/back-arrow.svg" alt="arrow icon" />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h2>პირადი ინფო</h2>
            <span>1/3</span>
          </div>

          <section>
            <div>
              <StyledLabel htmlFor="name">სახელი</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                placeholder="შეიყვანეთ სახელი"
                value={resumeInfo.name}
                onChange={handleChange}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
            </div>
            <div>
              <StyledLabel htmlFor="surname">გვარი</StyledLabel>
              <StyledInput
                type="text"
                id="surname"
                placeholder="შეიყვანეთ გვარი"
                value={resumeInfo.surname}
                onChange={handleChange}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
            </div>
          </section>

          <UploadPhoto onFileChange={handleFileChange} />

          <div className="about-section">
            <StyledLabel htmlFor="about">ჩემ შესახებ (არასავალდებულო)</StyledLabel>
            <StyledBigInput
              type="text"
              id="about"
              placeholder="ზოგადი ინფო შენ შესახებ"
              value={resumeInfo.about}
              onChange={handleChange}
            />
          </div>

          <div className="email-section">
            <StyledLabel htmlFor="email">ელ. ფოსტა</StyledLabel>
            <StyledLongInput
              type="text"
              id="email"
              placeholder="anzorr666@redberry.ge"
              value={resumeInfo.email}
              onChange={handleChange}
            />
            <StyledSpan>უნდა მთავრდებოდეს @redberry.ge-ით</StyledSpan>
          </div>

          <div className="number-section">
            <StyledLabel htmlFor="number">მობილურის ნომერი</StyledLabel>
            <StyledLongInput
              type="text"
              id="number"
              placeholder="+995 551 12 34 56"
              value={resumeInfo.number}
              onChange={handleChange}
            />
            <StyledSpan>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</StyledSpan>
          </div>
          <Link to={"/experience"} className="next">
          <StyledButton type="submit">შემდეგი</StyledButton>
          </Link>
        </form>
      </div>
      <Resume  preview={preview} resumeInfo={resumeInfo}/>
    </StyledPersonal>
  );
}

export default Personal;
