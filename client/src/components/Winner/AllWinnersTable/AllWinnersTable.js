import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {Typography} from "@material-ui/core"
import {useSelector} from "react-redux"

const AllWinnersTable = () => {
  const topWin = useSelector(state => state.winnerReducer.topWin)

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell)

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow)

  return (
    <>
      <Typography variant="h4" align={"center"}>Топ побед всех игроков</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nickname</StyledTableCell>
              <StyledTableCell align="center">Количество побед</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topWin.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.nickname}
                </StyledTableCell>
                <StyledTableCell align="center">{row.winner}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AllWinnersTable