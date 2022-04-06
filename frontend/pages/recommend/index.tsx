import AppLayout from "../../components/layout/AppLayout";
import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from "next/router";
import Grid from '@mui/material/Grid';
import WineCardList from '../../components/recomm/WineCardList'

const theme = createTheme({
  palette: {
    primary: {
      main: '#590805'
    },
    secondary: {
      main: '#F7F3F0',
    },
    text: {
      primary: '#590805',
      secondary: '#F7F3F0',
    },
  },
})


const Recommend = () => {
  const res = [55,44,33,22,11]

  // const [winedata, setData] = useState()
  // const BASE_URL = 'https://j6a101.p.ssafy.io:8080/api/wine/'
  // useEffect(() => {
  //   axios.get(BASE_URL + props.num)
  //   .then(res => {
  //     setData(res.data.object)
  //   })
  // }, [])

  // console.log(winedata)

  return (
    <AppLayout>
      <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
        <Card sx={{ minWidth: 275, mt: 5, background: "#f7f3f0", }}>
          <CardContent>
            <Typography sx={{ mt: 1.5 }} variant="h4" component="div">
              <strong>
                와인 추천받기
              </strong>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1.5 }}>
              질문에 대답하고
              <br />
              딱 맞는 와인을 찾아보세요.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <strong
              onClick={() => {
                Router.push(`/recommend/survey`)
              }}>추천받기</strong></Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={8} justifyContent="center">
          <WineCardList res={res}></WineCardList>
        </Grid>
      </Grid>
      </ThemeProvider>
    </AppLayout>
  )
};
export default Recommend;