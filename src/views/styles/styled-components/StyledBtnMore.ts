import styled from "styled-components";

const StyledBntMore = styled.button`

    padding: 14px 21px;
    margin: 16px 0 0;
    border-radius: 4px;
    background-color: #62a1eb;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`
export default StyledBntMore;

export const StyledBtnLess = styled(StyledBntMore)`
    background-color: red;
`