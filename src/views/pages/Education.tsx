import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import PageContainer from "../styles/styled-components/PageContainer";
import StyledButton from "../styles/styled-components/StyledButton";
import StyledBntMore, { StyledBtnLess } from '../styles/styled-components/StyledBtnMore';  
import PersonalResume from '../components/PersonalResume';
import { EducationProps } from '../../types';
import EducationForm from '../components/EducationForm';

const Education: React.FC<EducationProps> = ({ general, photo, experience, touched, eduTouched, setEduTouched, education, setEducation, expTouched }) => {
  const navigate = useNavigate(); 

  const [eduError, setEduError] = useState({
    school: "",
  });

  const isTwoSymbol = (symbol: string) => /^.{2,}$/.test(symbol);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let error = "";

    switch (id) {
      case 'school':
        if (!isTwoSymbol(value)) {
          error = "მინიმუმ 2 სიმბოლო";
        }
        break;
      default:
        break;
    }

    setEduError((prevState) => ({
      ...prevState,
      [id]: error
    }));

    const neweducation = [...education];
    neweducation[index] = {
      ...neweducation[index],
      [id]: value
    };

    setEducation(neweducation);

    setEduTouched((prevState) => ({
      ...prevState,
      [id]: true
    }));

    localStorage.setItem('education', JSON.stringify(education));
  };

  const handleDateChange = (index: number, field: 'start_date' | 'end_date', date: string) => {
    const neweducation = [...education];
    neweducation[index] = {
      ...neweducation[index],
      [field]: date,
    };

    setEducation(neweducation);

    setEduTouched((prevState) => ({
      ...prevState,
      [field]: true
    }));

    localStorage.setItem('education', JSON.stringify(education));
  };

  const handleDegreeChange = (index: number, value: string) => {
    const neweducation = [...education];
    neweducation[index] = {
      ...neweducation[index],
      degree: value,
    };

    setEducation(neweducation);

    setEduTouched((prevState) => ({
      ...prevState,
      degree: true
    }));
    
    localStorage.setItem('education', JSON.stringify(education));
  };

  const addEduForm = () => {
    setEducation([...education, { education: "", degree: "", end_date: "", info: "" }]);
  };

  const removeEduForm = () => {
    if (education.length > 1) {
      setEducation(education.slice(0, -1));
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('education', JSON.stringify(education));
    navigate("/experience"); 
  };

  const handleBackToHomePage = () => {
    localStorage.removeItem('general');
    localStorage.removeItem('photo');

    navigate("/");
    window.location.reload();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('education', JSON.stringify(education));
    navigate("/result");
  };

  return (
    <PageContainer>
      <div className="form-container">
        <Link to={"/"} onClick={handleBackToHomePage}>
          <img src="/images/back-arrow.svg" alt="arrow icon" />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h2>განათლება</h2>
            <span>3/3</span>
          </div>
          {education.map((edu, index) => (
            <EducationForm
              key={index}
              eduInfo={edu}
              handleChange={(e) => handleChange(index, e)}
              handleDateChange={(field, date) => handleDateChange(index, field, date)}
              handleDegreeChange={(value) => handleDegreeChange(index, value)}
              eduError={eduError}
              eduTouched={eduTouched}
            />
          ))}
          <div className='addExpBtn'>
            <StyledBntMore onClick={addEduForm} type="button">სხვა სასწავლებლის დამატება</StyledBntMore>
            {education.length > 1 && (
              <StyledBtnLess onClick={removeEduForm} type="button">სასწავლებლის წაშლა</StyledBtnLess>
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
        experience={experience}
        education={education}
        expTouched={expTouched}
        eduTouched={eduTouched}
      />
    </PageContainer>
  );
};

export default Education;
