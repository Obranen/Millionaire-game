import {useEffect} from "react"
import {ListItem, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {fullWinningsSum, currentWinningsSum} from "../../../../../store/actions/progressLevel"
import levelItemStyles from './levelItemStyles'

const LevelItem = props => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)

  const classes = levelItemStyles()

  const futureQuestion = currentQuestion + 1

  function numberWithSpaces({number}) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  useEffect(() => {
    if (currentQuestion === props.currentLevel.level) {
      const winnerMoney = props.currentLevel.text
      dispatch(currentWinningsSum(winnerMoney))
    }
    if (futureQuestion === props.currentLevel.level) {
      const winnerMoney = props.currentLevel.text
      dispatch(fullWinningsSum(winnerMoney))
    }
  })

  return (
    <>
      {futureQuestion === props.currentLevel.level ?
        <ListItem className={`${classes.item} ${classes.itemCurrent}`}>
          <Typography variant={'inherit'}>{props.currentLevel.level}</Typography>
          <Typography variant={'inherit'}>
            {numberWithSpaces({number: props.currentLevel.text})} &#8372;
          </Typography>
        </ListItem> :
        <ListItem className={classes.item}>
          <Typography variant={'inherit'}>{props.currentLevel.level}</Typography>
          <Typography variant={'inherit'}>
            {numberWithSpaces({number: props.currentLevel.text})} &#8372;
          </Typography>
        </ListItem>}
    </>
  )
}

export default LevelItem