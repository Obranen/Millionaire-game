import {Grid} from "@material-ui/core"
import LevelList from "./LevelList/LevelList"
import {useSelector} from "react-redux"

const ProgressLevel = () => {
  const levels = useSelector(state => state.progressLevelReducer.levels)
  const losing = useSelector(state => state.quizReducer.losing)
  const winner = useSelector(state => state.quizReducer.winner)

  return (
    <Grid item xs={3}>
      {
        losing || winner ?
          null :
          <LevelList
            levels={levels}
          />
      }
    </Grid>
  )
}

export default ProgressLevel