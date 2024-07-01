import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import PageContainer from "../styles/styled-components/PageContainer";
import StyledButton from "../styles/styled-components/StyledButton";
import ExperienceForm from '../components/ExperienceForm';
import StyledBntMore, { StyledBtnLess } from '../styles/styled-components/StyledBtnMore';
import PersonalResume from '../components/PersonalResume';
import { ExperienceProps } from '../../types';

const Experience: React.FC<ExperienceProps> = ({ 
  general, 
  photo, 
  touched, 
  experience, 
  setExperience, 
  education,
  expTouched,
  eduTouched, 
  setExpTouched }) => {

  const navigate = useNavigate(); 


  const [experienceErrors, setExperienceErrors] = useState({
    position: "",
    employer: "",
  });


  const isTwoSymbol = (symbol: string) => /^.{2,}$/.test(symbol);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let error = "";

    switch (id) {
      case 'position':
        if (!isTwoSymbol(value)) {
          error = "მინიმუმ 2 სიმბოლო";
        }
        break;
      case 'employer':
        if (!isTwoSymbol(value)) {
          error = "მინიმუმ 2 სიმბოლო";
        }
        break;
      default:
        break;
    }

    setExperienceErrors((prevState) => ({
      ...prevState,
      [id]: error
    }));

    const newexperience = [...experience];
    newexperience[index] = {
      ...newexperience[index],
      [id]: value
    };

    setExperience(newexperience);

    setExpTouched((prevState) => ({
      ...prevState,
      [id]: true
    }));
    localStorage.setItem("experience", JSON.stringify({
      ...experience,
      [id]: value
    }));
  };

  const handleDateChange = (index: number, field: 'start_date' | 'end_date', date: string) => {
    const newexperience = [...experience];
    newexperience[index] = {
      ...newexperience[index],
      [field]: date,
    };
    localStorage.setItem('experience', JSON.stringify(newexperience));

    setExperience(newexperience);

    setExpTouched((prevState) => ({
      ...prevState,
      [field]: true
    }));
  };

  const addExperienceForm = () => {
    setExperience([...experience, { position: "", employer: "", start_date: "", end_date: "", info: "" }]);
  };

  const removeExperienceForm = () => {
    if (experience.length > 1) {
      setExperience(experience.slice(0, -1));
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('experience', JSON.stringify(experience));
    navigate("/personal"); 
  };

  const handleBackToHomePage = () => {
    localStorage.removeItem('general');
    localStorage.removeItem('photo');

    navigate("/");
    window.location.reload();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let exp of experience) {
      if (!exp.position || !exp.employer || !exp.start_date || !exp.end_date) {
        return;
      }
    }

    localStorage.setItem('experience', JSON.stringify(experience));
    navigate("/education");
  };
  return (
    <PageContainer>
      <div className="form-container">
      <Link to={"/"} onClick={handleBackToHomePage}>
          <img src="/images/back-arrow.svg" alt="arrow icon" />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h2>გამოცდილება</h2>
            <span>2/3</span>
          </div>
          {experience.map((exp, index) => (
            <ExperienceForm
              key={index}
              expInfo={exp}
              handleChange={(e) => handleChange(index, e)}
              handleDateChange={(field, date) => handleDateChange(index, field, date)}
              experienceErrors={experienceErrors}
              expTouched={expTouched}
            />
          ))}
          <div className='addExpBtn'>
            <StyledBntMore onClick={addExperienceForm} type="button">მეტი გამოცდილების დამატება</StyledBntMore>
            {experience.length > 1 && (
              <StyledBtnLess onClick={removeExperienceForm} type="button">გამოცდილების წაშლა</StyledBtnLess>
            )}
          </div>

            <StyledButton onClick={handleBack} className="back">უკან</StyledButton>
            <StyledButton type="submit" className="next">შემდეგი</StyledButton>
        </form>
      </div>
      <PersonalResume 
      general={general} 
      photo={photo} 
      touched={touched} 
      expTouched={expTouched}
      experience={experience} 
      education={education}
      eduTouched={eduTouched}
      >
      </PersonalResume>
    </PageContainer>
  );
};

export default Experience;
