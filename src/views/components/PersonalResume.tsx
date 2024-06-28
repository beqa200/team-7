import { StyledResult } from "../styles/StyledPersonal"

interface ResumeProps{
    resumeInfo: {
        name: string;
        surname: string;
        about: string;
        email: string;
        number: string;
        photo: File | null;
    },
    preview: string | null,
    touched: {
      name: boolean;
      surname: boolean;
      email: boolean;
      number: boolean;
      about: boolean;
  }
}

function PersonalResume({resumeInfo, preview, touched}:ResumeProps) {
  return (
    <StyledResult>
        <div className="info-wrapper">
         { touched.name && 
         <div className="name-wrapper">
            <h4>{resumeInfo.name}</h4>
            <h4>{resumeInfo.surname}</h4>
          </div>
        }

        { touched.email &&
          <div className="email-wrapper">
            <img src="/images/icon-email.svg" alt="email icon" />
            <p>{resumeInfo.email}</p>
          </div>
        }
        { touched.number &&
          <div className="number-wrapper">
            <img src="/images/icon-number.svg" alt="phone icon" />
            <p>{resumeInfo.number}</p>
          </div>
        }
        { touched.about &&
          <div className="about-wrapper">
            <h5>ჩემ შესახებ</h5>
            <p>{resumeInfo.about}</p>
          </div>
        }
        </div>

        <div className="img-container">
          {preview && <img src={preview} alt="profile" />}
        </div>

        <div className="resume-logo">
            <img src="/images/resume-logo.svg" alt="resume logo" />
        </div>
      </StyledResult>
  )
}

export default PersonalResume;
