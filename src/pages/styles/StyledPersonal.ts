import styled from "styled-components";

const StyledPersonal = styled.div`
    display: grid;
    grid-template-columns: 57% 43%;

    .form-container{
        height: 100vh;
        display: grid;
        grid-template-columns: 11.5% 88.5%;
        background-color: #f9f9f9;
        & > a{
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
            position: relative;

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
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 8px 24px 8px 0;
                    
                }
                
                & > div:last-child{
                    width: 100%;
                    padding: 8px 0 8px 24px ;
                }
                
                @media only screen and (max-width:1919px){
                    flex-direction: column;
                    align-items: flex-start;
                    
                    & > div:last-child{
                        padding: 8px 0;
                    }
                    & > div{
                        padding: 8px 0;
                    }
                }
            }

            .about-section,
            .email-section,
            .number-section{
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 8px 0;
            }

            .email-section{
                margin: 17px 0 13px;
            }

            & > .next{
                position: absolute;
                bottom: 65px;
                left: calc(100% - 301px);
            }
        }
    }


`

export const StyledResult = styled.section`

    padding: 48px 75px 44px 80px;
    display: grid;
    grid-template-columns: 63.2% 36.8%;

    .info-wrapper{

        .name-wrapper{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            margin-bottom: 17px;

            & > h4{
                font-size: 34px;
                font-weight: bold;
                color: #f93b1d;
            }
        }

        .email-wrapper,
        .number-wrapper{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;

            & > img{
                width: 16.7px;
                height: 16.7px;
            }

            & > p{
                font-size: 18px;
                font-weight: normal;
                color: #1a1a1a;
            }
        }

        .number-wrapper{
            margin:10px 0 34px;
        }

        .about-wrapper{
            display: flex;
            flex-direction: column;
            gap: 15px;

            & > h5{
                font-size: 18px;
                font-weight: bold;
                color: #f93b1d;
            }

            & > p{
                font-size: 16px;
                font-weight: normal;
                line-height: 1.38;
                color: #000;
            }
        }
    }

    .img-container{
        width: 246px;
        height: 246px;

        & > img{
            width: 100%;
            height: 100%;
            border-radius: 133px;
        }
    }
`


export default StyledPersonal