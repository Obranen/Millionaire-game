const {makeStyles} = require("@material-ui/core/styles")

const timerStyles = makeStyles((theme) => ({
  timer: {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    textShadow: `2px 2px 3px ${theme.palette.secondary.contrastText}`,
  }
}))

export default timerStyles