import styled from "styled-components";


const StyledEduInfo = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 26px;
    gap:15px;

    & > h5{
        font-size: 18px;
        font-weight: bold;
        color: #f93b1d;
    }
    div{
        
            & > h6{
                font-size: 16px;
                font-weight: normal;
                line-height: 1.38;
                color: #1a1a1a;
            }
    
            & > span{
                font-size: 16px;
                font-weight: normal;
                color: #909090;
                margin: 7px 0 16px;
                }
            }
        
            & > p{
                font-size: 16px;
                font-weight: normal;
                line-height: 1.38;
                color: #000;
            }

`

export default StyledEduInfo;