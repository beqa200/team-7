import styled from "styled-components";

const StyledButton = styled.button`

    padding: 14px 35px;
    border-radius: 4px;
    background-color: #6b40e3;
    border: none;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1.28px;
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: #7949ff;
    }

    &:active{
        background-color: #512faf;
    }
`


export default StyledButton;