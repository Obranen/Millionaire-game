const {makeStyles} = require("@material-ui/core/styles")

const wrapperMessageStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: '70%',
    padding: '24px',
    margin: "40px auto 0 auto",
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: '22px',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  iconClose: {
    position: "absolute",
    top: '4px',
    right: '4px',
    cursor: "pointer",
    fontSize: '26px',
    color: theme.palette.secondary.dark,
    transition: "color 0.3s ease",
    '&:hover': {
      color: theme.palette.primary.dark,
    }
  }
}))

export  default wrapperMessageStyles