import React from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {},
  titleQuestion: {
    textAlign: 'center',
  },
}))

const Question = props => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Paper>
        <Typography variant="h5" className={classes.titleQuestion}>{props.question}</Typography>
      </Paper>
    </Grid>
  )
}

export default Question