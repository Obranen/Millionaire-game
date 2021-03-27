import {makeStyles} from "@material-ui/core/styles";

const quizStyles = makeStyles((theme) => ({
  success: {
    animation: `$pulsing-success 1500ms 4`,
  },
  error: {
    backgroundColor: `${theme.error.backgroundColor} !important`,
  },
  "@keyframes pulsing-success": {
    "0%": {
      backgroundColor: theme.palette.primary.light,
    },
    "50%": {
      backgroundColor: theme.success.backgroundColor,
    },
    "100%": {
      backgroundColor: theme.palette.primary.light,
    }
  },
  currentSelectedAnswer: {
    backgroundColor: `${theme.warning.backgroundColor} !important`,
  },
}))

export default quizStyles