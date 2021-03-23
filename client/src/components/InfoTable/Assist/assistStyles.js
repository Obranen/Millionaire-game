import {makeStyles} from "@material-ui/core/styles"

const assistStyles = makeStyles((theme) => ({
  success: {
    color: theme.success.color,
    backgroundColor: theme.palette.primary.light,
    width: '60px',
    height: '60px',
    marginTop: '20px',
    cursor: "pointer",
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.14), 0 2px 4px rgba(0,0,0,0.21)',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0 7px 14px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.18)',
    },
  },
  used: {
    color: theme.error.color,
    backgroundColor: `${theme.error.backgroundColor} !important`,
  },
}))

export default assistStyles