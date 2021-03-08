import React, {useEffect} from 'react'
import AllWinnersTable from "./AllWinnersTable/AllWinnersTable"
import MyWinsTable from "./MyWinsTable/MyWinsTable"
import {useDispatch} from "react-redux"
import {getDataWinner} from "../../store/actionsAsync/winner";

const Winner = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataWinner())
  }, [dispatch])

  return (
    <>
      <AllWinnersTable/>
      <MyWinsTable/>
    </>
  )
}

export default Winner