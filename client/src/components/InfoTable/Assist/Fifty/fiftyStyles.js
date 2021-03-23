import {makeStyles} from "@material-ui/core/styles"

const fiftyStyles = makeStyles((theme) => ({
  used: {
    color: theme.error.color,
    backgroundColor: `${theme.error.backgroundColor} !important`,
  },
  icon: {
    width: '100%',
    height: '100%',
    textAlign: "center",
    paddingTop: '19px',
    fontWeight: 'bold',
  },
}))

export default fiftyStyles