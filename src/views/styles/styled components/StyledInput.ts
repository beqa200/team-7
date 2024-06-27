import styled from "styled-components";

const BaseInput = styled.input`

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

        &::placeholder {
            font-size: 16px;
            line-height: 1.31;
            color: rgba(0, 0, 0, 0.6);
        }

        &:hover {
            border: solid 2px #bcbcbc;
        }

        &:active {
            border: solid 2px #bcbcbc;
        }
`

const StyledInput = styled(BaseInput)<{ $haserror: boolean, $isvalid: boolean }>`
 border: solid 1px ${props => props.$haserror ? '#ef5050' : props.$isvalid ? '#98e37e' : '#bcbcbc'};
`;

export const StyledBigInput = styled(BaseInput).attrs({as:'textarea'})`
        width: 100%;
        padding: 13px 83px 46px 16px;
        white-space: wrap;
        
`

export const StyledLongInput = styled(StyledInput)`
        width: 100%;
`

export default StyledInput;