import LevelItem from "./LevelItem/LevelItem"
import {List, Paper} from "@material-ui/core"

const LevelList = props => {
  return (
    <Paper>
      <List>
        {props.levels.map((level, index) => {
          return (
            <LevelItem
              key={index}
              currentLevel={level}
            />
          )
        })}
      </List>
    </Paper>
  )
}

export default LevelList