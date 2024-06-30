import { Link } from "react-router-dom"
import styled from "styled-components"


function Home() {
  return (
    <StyledHome>
      <img src="/images/logo.svg" alt="logo icon" />
      <hr />
      <div>
        <Link to={'/personal'}>
          <button>რეზიუმეს დამატება</button>
        </Link>
        <div className="img-container"></div>
      </div>
    </StyledHome>
  )
}


const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(/images/bg-home.png) no-repeat;
    background-size: cover;
    
    & > img{
      padding: 25px 70px;
    }

    & > hr{
      height: 1px;
      margin: 0 70px;
      background-color: #1a1a1a;
    }

    & > div{
      width: 100%;
      margin: 384px 0 0;
      position: relative;

      a{
        width: 464px;
        height: 60px;
        margin: 40px 0 199px;
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        
        button{
          width: 100%;
          padding: 18px 126px;
          border: none;
          border-radius: 8px;
          background-color: #1a1a1a;
          font-size: 20px;
          font-weight: 500;
          color: #fff;
        }
      }

      .img-container{
        width: 299px;
        height:299px;
        background: url(/images/bg-logo.png)  center/299px 299px;
        background-repeat: no-repeat;
        z-index: -10;
        position: absolute;
        left: calc(50%);
        transform:translateX(116px);
      }
    }


`

export default Home
