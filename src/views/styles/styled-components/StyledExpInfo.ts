import styled from "styled-components";


const StyledExpInfo = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 24px;
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
        
            & > div{
                display: flex;
                flex-direction: row;
                gap: 7px;
                margin: 7px 0 15px;
        
                & > span{
                    font-size: 16px;
                    font-weight: normal;
                    color: #909090;
                }
            }
        
            & > p{
                font-size: 16px;
                font-weight: normal;
                line-height: 1.38;
                color: #000;
            }

    }

    & > hr{
        height: 1px;
        background-color: #c8c8c8;
    }

`

export default StyledExpInfo;