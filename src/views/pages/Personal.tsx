import { Link, useNavigate } from "react-router-dom";
import StyledInput, { StyledBigInput, StyledLongInput } from "../styles/styled-components/StyledInput";
import StyledLabel from "../styles/styled-components/StyledLabel";
import StyledSpan from "../styles/styled-components/StyledSpan";
import UploadPhoto from "../components/UploadPhoto";
import { useState } from "react";
import StyledButton from "../styles/styled-components/StyledButton";
import StyledPersonal from "../styles/StyledPersonal";
import { PersonalProps } from "../../types";
import PersonalResume from "../components/PersonalResume";



function Personal({general, setGeneral, photo, setPhoto, touched, setTouched,expTouched,eduTouched, experience, education }:PersonalProps) {

  const navigate = useNavigate();

  const handleFileChange = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setPhoto(objectUrl);
    setGeneral((prevState) => ({
      ...prevState,
      photo: file
    }));
  };

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });


  const isGeorgianName = (name: string) => /^[ა-ჰ]{2,}$/.test(name);
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+$/.test(email) && email.endsWith("@redberry.ge");
  const isGeorgianNumber = (number: string) => /^\+995\d{3}\d{2}\d{2}\d{2}$/.test(number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let error = "";

    switch (id) {
      case 'name':
        if (!isGeorgianName(value)) {
          error = "სახელი უნდა შედგებოდეს მინიმუმ 2 ქართული ასოსგან";
        }
        break;
      case 'last_name':
        if (!isGeorgianName(value)) {
          error = "გვარი უნდა შედგებოდეს მინიმუმ 2 ქართული ასოსგან";
        }
        break;
      case 'email':
        if (!isValidEmail(value)) {
          error = "ელ. ფოსტა უნდა მთავრდებოდეს @redberry.ge-ით";
        }
        break;
      case 'number':
        if (!isGeorgianNumber(value)) {
          error = "ნომერი უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს";
        }
        break;
      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [id]: error
    }));

    setGeneral((prevState) => ({
      ...prevState,
      [id]: value
    }));

    setTouched((prevState) => ({
      ...prevState,
      [id]: true
    }));

    localStorage.setItem("general", JSON.stringify({
      ...general,
      [id]: value
    }));
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmpty = Object.entries(general).some(([key, value]) =>
      key !== 'bio' && (value === null || (typeof value === 'string' && value.trim() === ''))
    );
    const hasErrors = Object.values(errors).some(error => !!error);

    if (hasErrors || isEmpty) {
      return; 
    }
    localStorage.setItem("general", JSON.stringify(general));
    if (photo) {
      localStorage.setItem("photo", photo);
    }
    
    navigate("/experience");
  };
  
  const handleBackToHomePage = () => {
    localStorage.removeItem('general');
    localStorage.removeItem('photo');

    navigate("/");
    window.location.reload();
  };


  return (
    <StyledPersonal>
      <div className="form-container">
      <Link to={"/"} onClick={handleBackToHomePage}>
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
                value={general.name}
                onChange={handleChange}
                $haserror={!!errors.name}
                $isvalid={!!general.name && !errors.name}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              {touched.name && (
                <img className={errors.name ? 'errorIcon' : "doneIcon"} src={errors.name ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
              )}
            </div>
            <div>
              <StyledLabel htmlFor="last_name">გვარი</StyledLabel>
              <StyledInput
                type="text"
                id="last_name"
                placeholder="შეიყვანეთ გვარი"
                value={general.last_name}
                onChange={handleChange}
                $haserror={!!errors.surname}
                $isvalid={!!general.last_name && !errors.surname}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              {touched.last_name && (
                <img className={errors.surname ? 'errorIcon' : "doneIcon"} src={errors.surname ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
              )}
            </div>
          </section>

          <UploadPhoto onFileChange={handleFileChange} />

          <div className="about-section">
            <StyledLabel htmlFor="bio">ჩემ შესახებ (არასავალდებულო)</StyledLabel>
            <StyledBigInput
              id="bio"
              placeholder="ზოგადი ინფო შენ შესახებ"
              value={general.bio}
              onChange={handleChange}
            />
          </div>

          <div className="email-section">
            <StyledLabel htmlFor="email">ელ. ფოსტა</StyledLabel>
            <StyledLongInput
              type="text"
              id="email"
              placeholder="anzorr666@redberry.ge"
              value={general.email}
              onChange={handleChange}
              $haserror={!!errors.email}
              $isvalid={!!general.email && !errors.email}
            />
            <StyledSpan>უნდა მთავრდებოდეს @redberry.ge-ით</StyledSpan>
            {touched.email && (
              <img className={errors.email ? 'errorIcon' : "doneIcon"} src={errors.email ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
            )}
          </div>

          <div className="number-section">
            <StyledLabel htmlFor="number">მობილურის ნომერი</StyledLabel>
            <StyledLongInput
              type="text"
              id="number"
              placeholder="+995 551 12 34 56"
              value={general.number}
              onChange={handleChange}
              $haserror={!!errors.number}
              $isvalid={!!general.number && !errors.number}
            />
            <StyledSpan>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</StyledSpan>
            {touched.number && (
              <img className={errors.number ? 'errorIcon' : "doneIcon"} src={errors.number ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
            )}
          </div>
          <StyledButton type="submit" className="next">შემდეგი</StyledButton>
        </form>
      </div>
      <PersonalResume photo={photo} general={general} touched={touched} experience={experience} expTouched={expTouched} eduTouched={eduTouched} education={education}/>
    </StyledPersonal>
  );
}

export default Personal;
