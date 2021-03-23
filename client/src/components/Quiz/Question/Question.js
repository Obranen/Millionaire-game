import React from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import questionStyles from './questionStyles'

const Question = props => {
  const classes = questionStyles()

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={5}>
        <Typography className={classes.text} variant="h5" align="center">{props.question}</Typography>
      </Paper>
    </Grid>
  )
}

export default Question