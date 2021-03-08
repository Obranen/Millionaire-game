import {Container} from "@material-ui/core"
import InfoTable from "../components/InfoTable/InfoTable"
import Quiz from "../components/Quiz/Quiz"
import Welcome from "../components/Welcome/Welcome"
import {useSelector} from "react-redux"

const HomePage = () => {
  const startButtonState = useSelector(state => state.welcomeReducer.startButtonState)
  const losing = useSelector(state => state.quizReducer.losing)
  const winner = useSelector(state => state.quizReducer.winner)

  return (
    <Container>
      {
        startButtonState ?
          <Welcome/> :
          <>
            <InfoTable/>
            {
              losing || winner ?
                null :
                <Quiz/>
            }
          </>
      }
    </Container>
  )
}

export default HomePage