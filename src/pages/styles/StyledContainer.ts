import styled from "styled-components";

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 57% 43%;

    .form-container{
        height: 100vh;
        display: grid;
        grid-template-columns: 11.5% 88.5%;
        background-color: #f9f9f9;
        a{
            padding: 45px 0 0 48px;

            & > img{
                width: 40px;
                height: 40px;
                cursor: pointer;
            }
        }

        form{
            padding: 47px 150px 65px 0;
            margin-left: 24px;

            .title{
                width: 100%;
                padding-bottom: 11px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #1a1a1a;
                margin-bottom:69px;

                & > h2{
                    font-size: 24px;
                    font-weight: bold;
                    color: #1a1a1a;
                }

                & > span{
                    font-size: 20px;
                    font-weight: normal;
                    color: #1a1a1a;
                }
            }

            & > section{   

                display: flex;
                align-items: center;
                gap: 8px;

                & > div{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 8px 24px 8px 0;

                }

                & > div:last-child{
                    padding: 8px 24px ;
                }

            }
        }
    }







`


export default StyledContainer