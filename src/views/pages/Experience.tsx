
import { useEffect } from 'react';
import { PersonalProps } from '../../types';
import { Link } from 'react-router-dom';
import PageContainer from "../styles/styled-components/PageContainer"
import StyledButton from "../styles/styled-components/StyledButton"

interface ExperienceProps {
  resumeInfo: PersonalProps['resumeInfo'];
  setResumeInfo: PersonalProps['setResumeInfo'];
  preview: PersonalProps['preview'];
  setPreview: PersonalProps['setPreview'];
}

const Experience: React.FC<ExperienceProps> = ({  setResumeInfo,  setPreview}) => {


  useEffect(() => {
    const savedResumeInfo = localStorage.getItem('resumeInfo');
    const savedPreview = localStorage.getItem('photoPreview');

    if (savedResumeInfo) {
      setResumeInfo(JSON.parse(savedResumeInfo));
    }
    if (savedPreview) {
      setPreview(savedPreview);
    }
  }, []);


  return (
    <PageContainer>
       <div className="form-container">
        <Link to={"/personal"}>
          <img src="/images/back-arrow.svg" alt="arrow icon" />
        </Link>
        <form >
          <div className="title">
            <h2>გამოცდილება</h2>
            <span>2/3</span>
          </div>
            
          
          <StyledButton type="submit" className="next">შემდეგი</StyledButton>
        </form>
      </div>
    </PageContainer>
  );
};

export default Experience;
