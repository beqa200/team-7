import styled from "styled-components";
import { useEffect, useState } from "react";
import StyledExpInfo from "../styles/styled-components/StyledExpInfo";
import { StyledResult } from "../styles/StyledPersonal";
import StyledEduInfo from "../styles/styled-components/StyledEduInfo";

interface ResumeProps {
  general: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
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
  },
}

function PersonalResume({
  general,
  photo,
  touched,
  experience,
  education,
  expTouched,
  eduTouched
}: ResumeProps) {

  const [localGeneral, setLocalGeneral] = useState(general);
  const [localPhoto, setLocalPhoto] = useState(photo);
  const [localExperience, setLocalExperience] = useState(experience);
  const [localEducationList, setLocalEducationList] = useState(education);

  useEffect(() => {
    const savedGeneral = localStorage.getItem("general");
    const savedPhoto = localStorage.getItem("photo");
    const savedExperience = localStorage.getItem("experience");
    const savedEducationList = localStorage.getItem("education");

    if (savedGeneral) {
      setLocalGeneral(JSON.parse(savedGeneral));
    } else {
      setLocalGeneral(general);
    }

    if (savedPhoto) {
      setLocalPhoto(savedPhoto);
    } else {
      setLocalPhoto(photo);
    }

    if (savedExperience) {
      try {
        const parsedExperience = JSON.parse(savedExperience);
        if (Array.isArray(parsedExperience)) {
          setLocalExperience(parsedExperience);
        } else {
          console.error("savedExperience is not an array:", parsedExperience);
          setLocalExperience(experience);
        }
      } catch (e) {
        console.error("Error parsing savedExperience:", e);
        setLocalExperience(experience);
      }
    } else {
      setLocalExperience(experience);
    }

    if (savedEducationList) {
      try {
        const parsedEducation = JSON.parse(savedEducationList);
        if (Array.isArray(parsedEducation)) {
          setLocalEducationList(parsedEducation);
        } else {
          console.error("savedEducationList is not an array:", parsedEducation);
          setLocalEducationList(education);
        }
      } catch (e) {
        console.error("Error parsing savedEducationList:", e);
        setLocalEducationList(education);
      }
    } else {
      setLocalEducationList(education);
    }
  }, [general, photo, experience, education]);

  console.log("localExperience:", localExperience);
  console.log("localEducationList:", localEducationList);

  return (
    <StyledResume>
      <StyledResult>
        <div className="info-wrapper">
          {touched.name || localGeneral.name ? (
            <div className="name-wrapper">
              <h4>{localGeneral.name}</h4>
              <h4>{localGeneral.last_name}</h4>
            </div>
          ) : null}

          {touched.email || localGeneral.email ? (
            <div className="email-wrapper">
              <img src="/images/icon-email.svg" alt="email icon" />
              <p>{localGeneral.email}</p>
            </div>
          ) : null}
          {touched.number || localGeneral.number ? (
            <div className="number-wrapper">
              <img src="/images/icon-number.svg" alt="phone icon" />
              <p>{localGeneral.number}</p>
            </div>
          ) : null}
          {touched.bio || localGeneral.bio ? (
            <div className="about-wrapper">
              <h5>ჩემ შესახებ</h5>
              <p>{localGeneral.bio}</p>
            </div>
          ) : null}
        </div>

        <div className="img-container">
          {localPhoto && <img src={localPhoto} alt="profile" />}
        </div>

        {(touched.bio || localGeneral.bio || localPhoto) && <hr />}
      </StyledResult>
      <StyledExpInfo>
        {expTouched.employer && <h5>გამოცდილება</h5>}
        {(expTouched.position ||
          expTouched.employer ||
          expTouched.start_date ||
          expTouched.end_date) &&
          localExperience.map((item, index) => (
            <div key={index}>
              {(expTouched.position || expTouched.employer) && (
                <h6>
                  {item.position},{item.employer}
                </h6>
              )}
              <div>
                {expTouched.start_date && <span>{item.start_date}</span>}
                {expTouched.end_date && <span>{item.end_date}</span>}
              </div>
              {expTouched.info && <p>{item.info}</p>}
            </div>
          ))}
        {expTouched.info && <hr />}
      </StyledExpInfo>

      <StyledEduInfo>
        {eduTouched.education && <h5>განათლება</h5>}
        {(eduTouched.education ||
          eduTouched.degree ||
          eduTouched.end_date ||
          eduTouched.info) &&
          localEducationList.map((item, index) => (
            <div key={index}>
              {(eduTouched.education || eduTouched.degree) && (
                <h6>
                  {item.education},{item.degree}
                </h6>
              )}
              {eduTouched.end_date && <span>{item.end_date}</span>}
              {eduTouched.info && <p>{item.info}</p>}
            </div>
          ))}
      </StyledEduInfo>

      <div className="resume-logo">
        <img src="/images/resume-logo.svg" alt="resume logo" />
      </div>
    </StyledResume>
  );
}

export default PersonalResume;

const StyledResume = styled.div`
  height: 1080px;
  padding: 48px 75px 44px 80px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  background-color: #fff;

  .resume-logo {
    position: absolute;
    left: 78px;
    bottom: 44px;

    & > img {
      width: 42px;
      height: 42px;
    }
  }
`;
