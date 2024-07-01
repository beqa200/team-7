import styled from "styled-components";

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 57% 43%;
    
    .form-container{
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
           
                & > .next{
                    position: absolute;
                    bottom: 65px;
                    left: calc(100% - 301px);
                }
    
                & > .back{
                    position: absolute;
                    bottom: 65px;
                    left: 0;
                }
          

            & > .addExpBtn{
                display: flex;
                justify-content: space-between;
                margin-bottom: 159px;
            }
        }

    }
    
`


export default PageContainer