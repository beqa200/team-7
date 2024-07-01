
import styled from 'styled-components';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

interface StyledDatePickerProps {
  $haserror?: boolean;
}

const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
  width: 371px;
  padding: 13px 16px 14px;
  border: solid 1px ${props => props.$haserror ? '#98e37e' : '#bcbcbc'};
`;

interface DatePickerInputProps {
  $haserror?: boolean;
  onDateChange: (date: string) => void;
}

function DatePickerInput({ $haserror, onDateChange }: DatePickerInputProps) {
  const handleChange = (_: unknown, dateString: string | string[]) => {
    if (typeof dateString === 'string') {
      onDateChange(dateString);
    }
  };

  return (
    <Space direction="vertical" size={12}>
      <StyledDatePicker
        defaultValue={dayjs('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
        $haserror={$haserror}
        onChange={handleChange}
      />
    </Space>
  );
}

export default DatePickerInput;
