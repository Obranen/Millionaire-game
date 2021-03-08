import React from 'react';
import {Button, Typography} from "@material-ui/core";
import RestartGame from "../RestartGame/RestartGame";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import SaveGame from "../SaveGame/SaveGame";

const LostGame = () => {
  const currentWinningsMoney = useSelector(state => state.progressLevelReducer.currentWinningsMoney)
  const seconds = useSelector(state => state.timerReducer.seconds)
  const authenticated = useSelector(state => state.authReducer.authenticated)

  return (
    <>
      {
        authenticated ?
          seconds === 0 ?
            <>
              {
                currentWinningsMoney === undefined ?
                  <>
                    <Typography variant={'h5'} align={'center'} display={"block"}>
                      Ваше время вышло!
                    </Typography>
                    <RestartGame/>
                  </>
                  :
                  <>
                    <Typography variant={'h5'} align={'center'} display={"block"}>
                      Ваше время вышло! Ваш выйгрыш {currentWinningsMoney}&#8372;
                    </Typography>
                    <RestartGame/>
                    <SaveGame/>
                  </>
              }
            </>
            :
            <>

              {
                currentWinningsMoney === undefined ?
                  <>
                    <Typography variant={'h5'} align={'center'} display={"block"}>
                      Не правильный ответ!
                    </Typography>
                    <RestartGame/>
                  </>
                  :
                  <>
                    <Typography variant={'h5'} align={'center'} display={"block"}>
                      Не правильный ответ! Ваш выйгрыш {currentWinningsMoney}&#8372;
                    </Typography>
                    <RestartGame/>
                    <SaveGame/>
                  </>
              }
            </>
          :
          <Typography variant={'h5'} align={'center'} display={"block"}>
            Ваш выйгрыш {currentWinningsMoney}&#8372;
            <RestartGame/>
            <hr/>
            Для сохранения результата Авторизуйтесь
            <Button to="/auth" component={NavLink}>
              Вход/Регистрация
            </Button>
          </Typography>
      }
    </>
  );
}
;

export default LostGame