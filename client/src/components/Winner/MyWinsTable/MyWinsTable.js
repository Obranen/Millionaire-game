import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {Button, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {deleteWinnings} from "../../../store/actionsAsync/winner";

const MyWinsTable = () => {
  const dispatch = useDispatch()
  const personalWin = useSelector(state => state.winnerReducer.personalWin)

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

  const generateDate = date => {
    let newDate = new Date(date)
    return `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
  }

  const deleteRowWinHandler = event => {
    const id = event.target.parentNode.dataset.id
    dispatch(deleteWinnings(id))
    event.target.parentNode.parentNode.parentNode.classList.add('hide-table-row')
  }

  return (
    <>
      <Typography variant="h4" align={"center"}>Твои личные достижения</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Дата</StyledTableCell>
              <StyledTableCell align="center">Выйгрыш</StyledTableCell>
              <StyledTableCell align="center">Удалить сохранение</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personalWin.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="center">
                  {generateDate(row.date)}
                </StyledTableCell>
                <StyledTableCell align="center">{row.money}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    data-id={row._id}
                    onClick={deleteRowWinHandler}
                  >
                    Удалить
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MyWinsTable