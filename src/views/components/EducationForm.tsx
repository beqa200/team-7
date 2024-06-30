import React from 'react';
import StyledLabel from '../styles/styled-components/StyledLabel';
import StyledInputDiv from '../styles/StyledInputDiv';
import StyledSpan from '../styles/styled-components/StyledSpan';
import { StyledBigInput, StyledLongInput } from '../styles/styled-components/StyledInput';
import styled from 'styled-components';
import DatePickerInput from './DatePickerInput';
import EduDegree from './EduDegree';

interface EduFormProps {
  eduInfo: {
    education: string;
    degree: string;
    end_date: string;
    info: string;
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleDateChange: (field: 'end_date', date: string) => void
  handleDegreeChange: (value: string) => void
  eduError: {
    school: string;
  },
  eduTouched: {
    education: boolean;
    degree: boolean;
    end_date: boolean;
    info: boolean;
},
  children?: React.ReactNode;
}

function EducationForm({
  eduInfo,
  handleChange,
  handleDateChange,
  eduError,
  eduTouched,
  handleDegreeChange
}: EduFormProps) {

  return (
    <div>
      <StyledInputDiv>
        <StyledLabel htmlFor="education">სასწავლებელი</StyledLabel>
        <StyledLongInput
          type="text"
          id="education"
          placeholder="სასწავლებელი"
          value={eduInfo.education}
          onChange={handleChange}
          $haserror={!!eduError.school}
          $isvalid={!!eduInfo.education && !eduError.school}
        />
        <StyledSpan>მინიმუმ 2 სიმბოლო</StyledSpan>
        {eduTouched.education && (
          <img
            className={eduError.school ? 'errorIcon' : 'doneIcon'}
            src={eduError.school ? './images/icon-error.svg' : '/images/icon-done.svg'}
            alt="error icon"
          />
        )}
      </StyledInputDiv>

      <FlexDatePicker>
        <div>
          <StyledLabel htmlFor='degree'>ხარისხი</StyledLabel>
          <EduDegree onChange={handleDegreeChange} value={eduInfo.degree} /> 
        </div>
        <div>
          <StyledLabel htmlFor='end_date'>დამთვარების თარიღი</StyledLabel>
          <DatePickerInput
            $haserror={!!eduTouched.end_date}
            onDateChange={(date) => handleDateChange('end_date', date)}
          />
        </div>
      </FlexDatePicker>

      <StyledDescDiv>
        <StyledLabel htmlFor="info">აღწერა</StyledLabel>
        <StyledBigInput
          id="info"
          placeholder="განათლების აღწერა"
          value={eduInfo.info}
          onChange={handleChange}
        />
      </StyledDescDiv>
    </div>
  );
}

export default EducationForm;

const FlexDatePicker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 17px;

  @media only screen and (max-width: 1770px) {
    flex-direction: column;
    align-items: flex-start;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0;
  }
`;

const StyledDescDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0 49px;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 29px;
`;
