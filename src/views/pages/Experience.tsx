import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import PageContainer from "../styles/styled-components/PageContainer";
import StyledButton from "../styles/styled-components/StyledButton";
import ExperienceForm from '../components/ExperienceForm';
import StyledBntMore, { StyledBtnLess } from '../styles/styled-components/StyledBtnMore';
import PersonalResume from '../components/PersonalResume';
import { ExperienceProps } from '../../types';

const Experience: React.FC<ExperienceProps> = ({ 
  resumeInfo, 
  preview, 
  touched, 
  experienceList, 
  setExperienceList, 
  eduList,
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

    const newExperienceList = [...experienceList];
    newExperienceList[index] = {
      ...newExperienceList[index],
      [id]: value
    };

    setExperienceList(newExperienceList);

    setExpTouched((prevState) => ({
      ...prevState,
      [id]: true
    }));
    localStorage.setItem("experienceList", JSON.stringify({
      ...experienceList,
      [id]: value
    }));
  };

  const handleDateChange = (index: number, field: 'start_date' | 'end_date', date: string) => {
    const newExperienceList = [...experienceList];
    newExperienceList[index] = {
      ...newExperienceList[index],
      [field]: date,
    };
    localStorage.setItem('experienceList', JSON.stringify(newExperienceList));

    setExperienceList(newExperienceList);

    setExpTouched((prevState) => ({
      ...prevState,
      [field]: true
    }));
  };

  const addExperienceForm = () => {
    setExperienceList([...experienceList, { position: "", employer: "", start_date: "", end_date: "", info: "" }]);
  };

  const removeExperienceForm = () => {
    if (experienceList.length > 1) {
      setExperienceList(experienceList.slice(0, -1));
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('experienceList', JSON.stringify(experienceList));
    navigate("/personal"); 
  };

  const handleBackToHomePage = () => {
    localStorage.removeItem('resumeInfo');
    localStorage.removeItem('photoPreview');

    navigate("/");
    window.location.reload();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let experience of experienceList) {
      if (!experience.position || !experience.employer || !experience.start_date || !experience.end_date) {
        return;
      }
    }

    localStorage.setItem('experienceList', JSON.stringify(experienceList));
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
          {experienceList.map((experience, index) => (
            <ExperienceForm
              key={index}
              expInfo={experience}
              handleChange={(e) => handleChange(index, e)}
              handleDateChange={(field, date) => handleDateChange(index, field, date)}
              experienceErrors={experienceErrors}
              expTouched={expTouched}
            />
          ))}
          <div className='addExpBtn'>
            <StyledBntMore onClick={addExperienceForm} type="button">მეტი გამოცდილების დამატება</StyledBntMore>
            {experienceList.length > 1 && (
              <StyledBtnLess onClick={removeExperienceForm} type="button">გამოცდილების წაშლა</StyledBtnLess>
            )}
          </div>

            <StyledButton onClick={handleBack} className="back">უკან</StyledButton>
            <StyledButton type="submit" className="next">შემდეგი</StyledButton>
        </form>
      </div>
      <PersonalResume 
      resumeInfo={resumeInfo} 
      preview={preview} 
      touched={touched} 
      expTouched={expTouched}
      experienceList={experienceList} 
      eduList={eduList}
      eduTouched={eduTouched}
      >
      </PersonalResume>
    </PageContainer>
  );
};

export default Experience;
