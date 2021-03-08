import {useEffect} from "react"
import {ListItem, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import './LevelItem.scss'
import {fullWinningsSum, currentWinningsSum} from "../../../../../store/actions/progressLevel"

const LevelItem = props => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(state => state.quizReducer.currentQuestion)

  const futureQuestion = currentQuestion + 1

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
      {
        futureQuestion === props.currentLevel.level ?
          <ListItem className={'next-question'}>
            <Typography variant={'inherit'}>{props.currentLevel.level} текущий вопрос на&nbsp;</Typography>
            <Typography variant={'inherit'}>{props.currentLevel.text}&#8372;</Typography>
          </ListItem> :
          currentQuestion === props.currentLevel.level ?
            <ListItem className={'last-question'}>
              <Typography variant={'inherit'}>Ваш выйгрыш - {props.currentLevel.text}&#8372;</Typography>
            </ListItem> :
          <ListItem>
            <Typography variant={'inherit'}>{props.currentLevel.level} вопрос на&nbsp;</Typography>
            <Typography variant={'inherit'}>{props.currentLevel.text}&#8372;</Typography>
          </ListItem>
      }
    </>
  )
}

export default LevelItem