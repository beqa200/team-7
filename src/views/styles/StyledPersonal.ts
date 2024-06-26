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
            margin: 45px 0 0 48px;
            width: 40px;
            height: 40px;

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

            .doneIcon{
                width: 16.5px;
                height: 16.5px;
                position: absolute;
                top: 52.8px;
                right: 38.8px;
            }

            .errorIcon{
                width: 21px;
                height: 18.8px;
                position: absolute;
                top: 52.8px;
                right: 0;
            }

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
                    position: relative;

                }
                
                & > div:last-child{
                    width: 100%;
                    padding: 8px 24px ;
                    position: relative;

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
                position: relative;

                & > .doneIcon{
                    right: 16px;
                }

                & > .errorIcon{
                    right: -27px;
                }
            }

            .number-section{
                position: relative;

                & > .doneIcon{
                    right: 16px;
                }

                & > .errorIcon{
                    right: -27px;
                }
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

    display: grid;
    grid-template-columns: 63.2% 36.8%;
    grid-template-rows: 1fr 1px;

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
                word-break: break-all;
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

    & > hr{
        height: 1px ;
        background-color: #c8c8c8;
        grid-area: 2/1/2/3;
    }
   
`


export default StyledPersonal