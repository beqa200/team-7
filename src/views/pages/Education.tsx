import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import PageContainer from "../styles/styled-components/PageContainer";
import StyledButton from "../styles/styled-components/StyledButton";
import StyledBntMore, { StyledBtnLess } from '../styles/styled-components/StyledBtnMore';  
import PersonalResume from '../components/PersonalResume';
import { EducationProps } from '../../types';
import EducationForm from '../components/EducationForm';

const Education: React.FC<EducationProps> = ({ resumeInfo, preview, experienceList, touched, eduTouched, setEduTouched, eduList, setEduList, expTouched }) => {
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

    const newEduList = [...eduList];
    newEduList[index] = {
      ...newEduList[index],
      [id]: value
    };

    setEduList(newEduList);

    setEduTouched((prevState) => ({
      ...prevState,
      [id]: true
    }));

    localStorage.setItem('eduList', JSON.stringify(eduList));
  };

  const handleDateChange = (index: number, field: 'start_date' | 'end_date', date: string) => {
    const newEduList = [...eduList];
    newEduList[index] = {
      ...newEduList[index],
      [field]: date,
    };

    setEduList(newEduList);

    setEduTouched((prevState) => ({
      ...prevState,
      [field]: true
    }));

    localStorage.setItem('eduList', JSON.stringify(eduList));
  };

  const handleDegreeChange = (index: number, value: string) => {
    const newEduList = [...eduList];
    newEduList[index] = {
      ...newEduList[index],
      degree: value,
    };

    setEduList(newEduList);

    setEduTouched((prevState) => ({
      ...prevState,
      degree: true
    }));
    
    localStorage.setItem('eduList', JSON.stringify(eduList));
  };

  const addEduForm = () => {
    setEduList([...eduList, { education: "", degree: "", end_date: "", info: "" }]);
  };

  const removeEduForm = () => {
    if (eduList.length > 1) {
      setEduList(eduList.slice(0, -1));
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('eduList', JSON.stringify(eduList));
    navigate("/experience"); 
  };

  const handleBackToHomePage = () => {
    localStorage.removeItem('resumeInfo');
    localStorage.removeItem('photoPreview');

    navigate("/");
    window.location.reload();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('eduList', JSON.stringify(eduList));
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
          {eduList.map((edu, index) => (
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
            {eduList.length > 1 && (
              <StyledBtnLess onClick={removeEduForm} type="button">სასწავლებლის წაშლა</StyledBtnLess>
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
        experienceList={experienceList}
        eduList={eduList}
        expTouched={expTouched}
        eduTouched={eduTouched}
      />
    </PageContainer>
  );
};

export default Education;
