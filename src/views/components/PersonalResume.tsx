import styled from "styled-components";
import { useEffect, useState } from "react";
import StyledExpInfo from "../styles/styled-components/StyledExpInfo";
import { StyledResult } from "../styles/StyledPersonal";
import StyledEduInfo from "../styles/styled-components/StyledEduInfo";

interface ResumeProps {
  resumeInfo: {
    name: string;
    last_name: string;
    bio: string;
    email: string;
    number: string;
  },
  preview: string | null,
  touched: {
    name: boolean;
    last_name: boolean;
    email: boolean;
    number: boolean;
    bio: boolean;
},
  experienceList: {
    position: string;
    employer: string;
    start_date: string;
    end_date: string;
    info: string;
  }[],
  eduList: {
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
  }
  eduTouched: {
    education: boolean;
    degree: boolean;
    end_date: boolean;
    info: boolean;
  },
}

function PersonalResume({
  resumeInfo,
  preview,
  touched,
  experienceList,
  eduList,
  expTouched,
  eduTouched
}: ResumeProps) {

  const [localResumeInfo, setLocalResumeInfo] = useState(resumeInfo);
  const [localPreview, setLocalPreview] = useState(preview);
  const [localExperienceList, setLocalExperienceList] = useState(experienceList);
  const [localEduList, setLocalEduList] = useState(eduList);

  useEffect(() => {
    const savedResumeInfo = localStorage.getItem("resumeInfo");
    const savedPreview = localStorage.getItem("photoPreview");
    const savedExperienceList = localStorage.getItem("experienceList");
    const savedEduList = localStorage.getItem("eduList");

    if (savedResumeInfo) {
      setLocalResumeInfo(JSON.parse(savedResumeInfo));
    } else {
      setLocalResumeInfo(resumeInfo);
    }

    if (savedPreview) {
      setLocalPreview(savedPreview);
    } else {
      setLocalPreview(preview);
    }

    if (savedExperienceList) {
      setLocalExperienceList(JSON.parse(savedExperienceList));
    } else {
      setLocalExperienceList(experienceList);
    }

    if (savedEduList) {
      setLocalEduList(JSON.parse(savedEduList));
    } else {
      setLocalEduList(eduList);
    }
  }, [resumeInfo, preview, experienceList, eduList]);

  useEffect(() => {
    localStorage.setItem("resumeInfo", JSON.stringify(localResumeInfo));
  }, [localResumeInfo]);

  useEffect(() => {
    localStorage.setItem("photoPreview", localPreview || "");
  }, [localPreview]);

  useEffect(() => {
    localStorage.setItem("experienceList", JSON.stringify(localExperienceList));
  }, [localExperienceList]);

  useEffect(() => {
    localStorage.setItem("eduList", JSON.stringify(localEduList));
  }, [localEduList]);

  return (
    <StyledResume>
      <StyledResult>
        <div className="info-wrapper">
          {touched.name || localResumeInfo.name ? (
            <div className="name-wrapper">
              <h4>{localResumeInfo.name}</h4>
              <h4>{localResumeInfo.last_name}</h4>
            </div>
          ) : null}

          {touched.email || localResumeInfo.email ? (
            <div className="email-wrapper">
              <img src="/images/icon-email.svg" alt="email icon" />
              <p>{localResumeInfo.email}</p>
            </div>
          ) : null}
          {touched.number || localResumeInfo.number ? (
            <div className="number-wrapper">
              <img src="/images/icon-number.svg" alt="phone icon" />
              <p>{localResumeInfo.number}</p>
            </div>
          ) : null}
          {touched.bio || localResumeInfo.bio ? (
            <div className="about-wrapper">
              <h5>ჩემ შესახებ</h5>
              <p>{localResumeInfo.bio}</p>
            </div>
          ) : null}
        </div>

        <div className="img-container">
          {localPreview && <img src={localPreview} alt="profile" />}
        </div>

        {(touched.bio || localResumeInfo.bio || localPreview) && <hr />}
      </StyledResult>
      <StyledExpInfo>
        {expTouched.employer && <h5>გამოცდილება</h5>}
        {(expTouched.position ||
          expTouched.employer ||
          expTouched.start_date ||
          expTouched.end_date) &&
          localExperienceList.map((item, index) => (
            <div key={index}>
              {(expTouched.position || expTouched.employer) && (
                <h6>
                  {item.position},{item.employer}
                </h6>
              )}
              <div>
                {expTouched.start_date&& <span>{item.start_date}</span>}
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
          localEduList.map((item, index) => (
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
