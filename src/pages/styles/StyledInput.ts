import styled from "styled-components";

const StyledInput = styled.input`

        min-width: 371px;
        padding: 13px 16px 14px;
        border-radius: 4px;
        border: solid 1px #bcbcbc;
        background-color: #fff;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.31;
        color: #000;

        @media only screen and (max-width:1919px){
            width: 100%;
        }

        & > ::placeholder{
            font-size: 16px;
            line-height: 1.31;
            color: rgba(0, 0, 0, 0.6);
        }

        & > :hover{
            border: solid 2px #bcbcbc;
        }

        & > :active{
            border: solid 2px #bcbcbc;
        }




`

export default StyledInput


export const StyledBigInput = styled(StyledInput)`

        width: 100%;
        padding: 13px 16px 69px;

`

export const StyledLongInput = styled(StyledInput)`

        width: 100%;

`