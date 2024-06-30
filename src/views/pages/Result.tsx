import { Link, useNavigate } from "react-router-dom"
import PersonalResume from "../components/PersonalResume"
import styled from "styled-components";
import { useState } from "react";


interface ResultProps{
  general: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
    photo: string;
},
photo: string | null,
touched: {
  name: boolean;
  last_name: boolean;
  email: boolean;
  number: boolean;
  bio: boolean;
},
experience: {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
}[],
education: {
  education: string;
  degree: string;
  end_date: string;
  info: string;
}[],
expTouched: {
  position: boolean;
  employer: boolean;
  start_date: boolean;
  end_date: boolean;
  info: boolean;
},
eduTouched: {
  education: boolean;
  degree: boolean;
  end_date: boolean;
  info: boolean;
}

}

function Result({ general, photo, touched, experience, education, expTouched, eduTouched ,}:ResultProps) {
  const navigate = useNavigate(); 
  const handleBackToHomePage = () => {
    localStorage.removeItem('general');
    localStorage.removeItem('photo');
    localStorage.removeItem('experience');
    localStorage.removeItem('education');
  
    navigate("/");
    window.location.reload();
  };
  const [close, setClose] = useState(false);

  const handleClosePopup = () => {
    setClose(true);
  };
  return (
    <StyledResultContainer $close={close}>
       <Link to={"/"} onClick={handleBackToHomePage}>
          <img src="/images/backarrow.svg" alt="arrow icon" />
        </Link>
      <PersonalResume 
      general={general} 
      photo={photo}
      touched={touched}
      experience={experience}
      education={education}
      expTouched={expTouched}
      eduTouched={eduTouched} 
      />

      <section className="popup">
          <img src="/images/x-icon.svg" alt="close icon" className="close" onClick={handleClosePopup} />
          <h4> რეზიუმე წარმატებით გაიგზავნა  🎉</h4>
      </section>

    </StyledResultContainer>
  )
}

export default Result



const StyledResultContainer = styled.div<{ $close: boolean }>`
    width: 100vw;
    height: 1300px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 54px 0 129px;

    & > a{
            margin: 45px 0 0 48px;
            width: 40px;
            height: 40px;
            position: absolute;

            & > img{
                width: 40px;
                height: 40px;
                cursor: pointer;
            }
        }
    
    & > div{
      border: solid 0.8px #000;
      position: absolute;
      left: 50%;
      transform: translateX(-60%);
    }

    .popup{
      display: ${(props) => (props.$close ? 'none' : 'block')};
      width: 427px;
      height: 167px;
      padding: 28px 30px 30px;
      border-radius: 8px;
      box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.25);
      border: solid 1px #e4e4e4;
      background-color: #fff;
      position: absolute;
      top: 53px;
      right: 70px ;

      & > img{
        position: absolute;
        top: 11.4px;
        right: 17.4px;
      }

      & > h4{
        font-size: 28px;
        font-weight: 500;;
        line-height: 1.54;
        color: #1a1a1a;
      }
    }
`
