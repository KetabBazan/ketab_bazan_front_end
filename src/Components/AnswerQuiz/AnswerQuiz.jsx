import React, { useState, useEffect } from "react";
import {TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangeNav from "./../Navbar/changeNav";
import { baseUrl } from "../../Variable";
import Quizimg from "../../assets/Image/quiz-680x357.jpg";
import NoQuestion from "./NoQuestion"
import With1Question from "./With1Question";
import With2Question from "./With2Question";
import With3Question from "./With3Question";
import With4Question from "./With4Question";
import With5Question from "./With5Question";

const AnswerQuiz = () => {

    const [questionNum, setquestionNum] = useState();

    let token = "Token " + localStorage.getItem('token');

    useEffect(() => { intialize() }, []);
    const intialize = () => {

        axios.get(`${baseUrl}/quiz/generate/44?q=question_count`, {
          headers: {
            'Content-Type': 'application/json ',
            'Authorization': token
          }
        }).then((res) => {
          console.log(res.data)

          setquestionNum(res.data)

          console.log(questionNum)
        })
    }


    let show = null;
    if (questionNum === 0) {
      show = < NoQuestion/>;
    } else if(questionNum === 5) {
      show = <With5Question />;
    } else if(questionNum === 2) {
      show = <With2Question />
    } else if(questionNum === 1) {
      show = <With1Question />;
    } else if(questionNum === 3) {
      show = <With3Question />;
    } else if(questionNum === 4) {
      show = <With4Question />;
    }

    return ( 
        <div dir="rtl">

          <ChangeNav/>
    

          <Grid lg={10} md={10} xs={10} container item spacing={4} style={{margin:"80px auto auto auto"}}>

            <Grid item lg={4} md={5} xs={12} >

              <Paper style={{height:"240px", margin:"15px auto auto auto"}} elevation={1} >
                <br/>
                <Grid>
                  <Typography 
                  style={{margin:"auto 20px auto auto",fontSize: 22}}
                  >
                  کوئیز برای کتاب : <span style={{fontSize: 17}}>من پیش از تو</span>
                  </Typography>
                  
                </Grid>

                <Grid>
                  <Typography style={{margin:"10px 20px auto auto"}}>
                    این کوئیز شامل {questionNum} سوال است
                  </Typography>
                </Grid>

                <center>
                  <Grid>
                    <img style={{margin:"25px auto auto auto",height:"110px", width:"200px"}} src={Quizimg}></img>
                  </Grid>
                </center>

              </Paper>

            </Grid>


            <Grid item lg={8} md={7} xs={12}>

              {show}

            </Grid>

          </Grid>
          

        </div>
     );
}
 
export default AnswerQuiz;