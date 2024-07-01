import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

interface EduDegreeProps {
  value: string;
  onChange: (value: string) => void;
}

const EduDegree: React.FC<EduDegreeProps> = ({ value, onChange }) => {
  const options = [
    { value: 'საშუალო სკოლის დიპლომი', label: 'საშუალო სკოლის დიპლომი' },
    { value: 'ზოგადსაგანმანათლებლო დიპლომი', label: 'ზოგადსაგანმანათლებლო დიპლომი' },
    { value: 'ბაკალავრი', label: 'ბაკალავრი' },
    { value: 'მაგისტრი', label: 'მაგისტრი' },
    { value: 'დოქტორი', label: 'დოქტორი' },
    { value: 'ასოცირებული ხარისხი', label: 'ასოცირებული ხარისხი' },
    { value: 'კოლეჯი (ხარისხის გარეშე)', label: 'კოლეჯი (ხარისხის გარეშე)' },
    { value: 'სხვა', label: 'სხვა' },
  ];

  const handleChange = (value: unknown) => {
    onChange(value as string);
  };

  return (
    <StyledSelect
      showSearch
      placeholder="აირჩიეთ ხარისხი"
      optionFilterProp="label"
      onChange={handleChange}
      value={value}
      options={options}
    />
  );
};

const StyledSelect = styled(Select)`
  width: 371px;
  height: 48px;

  .ant-select-selector {
    border: solid 1px #bcbcbc !important;
  }

  .ant-select-selection-item {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.31;
    color: #000;
  }
`;

export default EduDegree;
