import {makeStyles} from "@material-ui/core/styles"

const answerItemStyles = makeStyles((theme) => ({
  item: {
    padding: '10px',
    cursor: 'pointer',
    transition: 'all .3s ease',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))

export default answerItemStyles