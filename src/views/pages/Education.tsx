import { Link } from "react-router-dom"
import PageContainer from "../styles/styled-components/PageContainer"
import StyledButton from "../styles/styled-components/StyledButton"


function Education() {
  return (
    <PageContainer>
       <div className="form-container">
        <Link to={"/experience"}>
          <img src="/images/back-arrow.svg" alt="arrow icon" />
        </Link>
        <form >
          <div className="title">
            <h2>განათლება</h2>
            <span>3/3</span>
          </div>
            
          
          <StyledButton type="submit" className="next">შემდეგი</StyledButton>
        </form>
      </div>
    </PageContainer>
  )
}

export default Education
