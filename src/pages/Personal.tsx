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
    name: "",
    surname: "",
    about: "",
    email: "",
    number: "",
    photo: null as File | null
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    surname: false,
    email: false,
    number: false,
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
      case 'surname':
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

    setResumeInfo((prevState) => ({
      ...prevState,
      [id]: value
    }));

    setTouched((prevState) => ({
      ...prevState,
      [id]: true
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
                $haserror={!!errors.name}
                $isvalid={!!resumeInfo.name && !errors.name}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              {touched.name && (
                <img className={errors.name ? 'errorIcon' : "doneIcon"} src={errors.name ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
              )}
            </div>
            <div>
              <StyledLabel htmlFor="surname">გვარი</StyledLabel>
              <StyledInput
                type="text"
                id="surname"
                placeholder="შეიყვანეთ გვარი"
                value={resumeInfo.surname}
                onChange={handleChange}
                $haserror={!!errors.surname}
                $isvalid={!!resumeInfo.surname && !errors.surname}
              />
              <StyledSpan>მინიმუმ 2 ასო, ქართული ასოები</StyledSpan>
              {touched.surname && (
                <img className={errors.surname ? 'errorIcon' : "doneIcon"} src={errors.surname ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
              )}
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
              $haserror={!!errors.email}
              $isvalid={!!resumeInfo.email && !errors.email}
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
              value={resumeInfo.number}
              onChange={handleChange}
              $haserror={!!errors.number}
              $isvalid={!!resumeInfo.number && !errors.number}
            />
            <StyledSpan>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</StyledSpan>
            {touched.number && (
              <img className={errors.number ? 'errorIcon' : "doneIcon"} src={errors.number ? './images/icon-error.svg' : '/images/icon-done.svg'} alt="error icon" />
            )}
          </div>
          <Link to={"/experience"} className="next">
            <StyledButton type="submit">შემდეგი</StyledButton>
          </Link>
        </form>
      </div>
      <Resume preview={preview} resumeInfo={resumeInfo} />
    </StyledPersonal>
  );
}

export default Personal;
