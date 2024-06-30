import React from 'react';
import StyledLabel from '../styles/styled-components/StyledLabel';
import StyledInputDiv from '../styles/StyledInputDiv';
import StyledSpan from '../styles/styled-components/StyledSpan';
import { StyledBigInput, StyledLongInput } from '../styles/styled-components/StyledInput';
import styled from 'styled-components';
import DatePickerInput from './DatePickerInput';

interface ExpFormProps {
  expInfo: {
    position: string;
    employer: string;
    start_date: string;
    end_date: string;
    info: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleDateChange: (field: 'start_date' | 'end_date', date: string) => void;
  experienceErrors: {
    position: string;
    employer: string;
  },
  expTouched: {
    position: boolean;
    employer: boolean;
    start_date: boolean;
    end_date: boolean;
    info: boolean;
},
  children?: React.ReactNode;
}

function ExperienceForm({
  expInfo,
  handleChange,
  handleDateChange,
  experienceErrors,
  expTouched,
}: ExpFormProps) {
  return (
    <div>
      <StyledInputDiv>
        <StyledLabel htmlFor="position">თანამდებობა</StyledLabel>
        <StyledLongInput
          type="text"
          id="position"
          placeholder="დეველოპერი, დიზაინერი, ა.შ"
          value={expInfo.position}
          onChange={handleChange}
          $haserror={!!experienceErrors.position}
          $isvalid={!!expInfo.position && !experienceErrors.position}
        />
        <StyledSpan>მინიმუმ 2 სიმბოლო</StyledSpan>
        {expTouched.position && (
          <img
            className={experienceErrors.position ? 'errorIcon' : 'doneIcon'}
            src={experienceErrors.position ? './images/icon-error.svg' : '/images/icon-done.svg'}
            alt="error icon"
          />
        )}
      </StyledInputDiv>

      <StyledInputDiv>
        <StyledLabel htmlFor="employer">დამსაქმებელი</StyledLabel>
        <StyledLongInput
          type="text"
          id="employer"
          placeholder="დამსაქმებელი"
          value={expInfo.employer}
          onChange={handleChange}
          $haserror={!!experienceErrors.employer}
          $isvalid={!!expInfo.employer && !experienceErrors.employer}
        />
        <StyledSpan>მინიმუმ 2 სიმბოლო</StyledSpan>
        {expTouched.employer && (
          <img
            className={experienceErrors.employer ? 'errorIcon' : 'doneIcon'}
            src={experienceErrors.employer ? './images/icon-error.svg' : '/images/icon-done.svg'}
            alt="error icon"
          />
        )}
      </StyledInputDiv>

      <FlexDatePicker>
        <div>
          <StyledLabel htmlFor='startDate'>დაწყების რიცხვი</StyledLabel>
          <DatePickerInput
            $haserror={!!expTouched.start_date}
            onDateChange={(date) => handleDateChange('start_date', date)}
          />
        </div>
        <div>
          <StyledLabel htmlFor='endDate'>დამთვარების რიცხვი</StyledLabel>
          <DatePickerInput
            $haserror={!!expTouched.end_date}
            onDateChange={(date) => handleDateChange('end_date', date)}
          />
        </div>
      </FlexDatePicker>

      <StyledDescDiv>
        <StyledLabel htmlFor="jobDesc">აღწერა</StyledLabel>
        <StyledBigInput
          id="jobDesc"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={expInfo.info}
          onChange={handleChange}
        />
      </StyledDescDiv>
    </div>
  );
}

export default ExperienceForm;

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
