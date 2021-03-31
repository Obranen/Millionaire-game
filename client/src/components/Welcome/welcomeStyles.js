import {makeStyles} from "@material-ui/core/styles"

const welcomeStyles = makeStyles((theme) => ({
  startGame: {
    marginTop: '20px',
    marginBottom: '50px',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.dark,
  },
}))

export default welcomeStyles