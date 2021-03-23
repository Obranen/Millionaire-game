import LevelItem from "./LevelItem/LevelItem"
import {List, Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column-reverse',
    fontSize: '16px',
  },
}))

const LevelList = props => {
  const classes = useStyles()

  return (
    <Paper elevation={4}>
      <List className={classes.list}>
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