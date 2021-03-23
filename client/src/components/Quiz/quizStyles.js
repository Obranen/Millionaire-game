import {makeStyles} from "@material-ui/core/styles";

const quizStyles = makeStyles((theme) => ({
  success: {
    animation: `$pulsing-success 1500ms 3`,
  },
  error: {
    animation: `$pulsing-error 1500ms 3`,
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
  "@keyframes pulsing-error": {
    "0%": {
      backgroundColor: theme.palette.primary.light,
    },
    "50%": {
      backgroundColor: theme.error.backgroundColor,
    },
    "100%": {
      backgroundColor: theme.palette.primary.light,
    }
  },
}))

export default quizStyles