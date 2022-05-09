
import React, { useState, useEffect, useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import SimpleContext from "./SimpleContext";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const AddNewComment = () => {

    const context = useContext(SimpleContext);


    const [click, setClick] = useState("");

    useEffect(() => {
        setClick(0);
    }, []);



    const clickHandler = () => {
        setClick(1);
    }

    const clickHandlerToZero = () =>
    {
        setClick(0);
    }


    let firstShow = (
        <Grid container >
        <Grid item xs={4.8} style={{ textAlign: "right", direction: "rtl", marginRight: "450px"  }}>
                    <h3>دیدگاه شما</h3>
        <Grid onClick={clickHandler} item xs={12} style={{ marginTop: "20px" }}>
            <Paper elevation={3} style={{ padding: "10px 20px", backgroundColor: "#f0f5f5" , height:'70px' }} >
                <AccountCircleIcon fontSize="large" /> <p style={{position:"relative" , top:"-35px" , right:"45px"}}>افزودن دیدگاه</p>
            </Paper>
        </Grid>
        </Grid>
        </Grid>);


    const SecondShow = (


        <div>
            <Grid item xs={5.4} style={{ textAlign: "right", direction: "rtl", marginRight: "420px"  }}>
                    <h3>دیدگاه شما</h3>
                
            <Grid item xs={12} style={{ marginTop: "20px", height: "auto" }}>
                <Paper elevation={3} style={{  height: "auto" , padding: "10px 20px" }} >

                    <TextareaAutosize onChange={context.handleSetComment} style={{  fontFamily:"Byekan " , fontSize:"15px", resize: "vertical" ,  width: "565px" , height:"100px" ,padding:"10px 10px" , marginTop:"5px"}}
                        aria-label="minimum height"
                        value={context.comment}
                        placeholder="نظرت و اینجا بنویس"
                       
                    />
                    <Button onClick={context.handleCreateNewComment} variant="contained" style={{ marginTop: "20px", marginRight: "465px" }}>ارسال دیدگاه </Button>
                </Paper>
            </Grid>
            </Grid >
        </div>
    )





    const Show = () => {
        let token = localStorage.getItem('token');
        let mainShow = null;

        if (click === 1) {
            mainShow = SecondShow;
        }
        else if(token !== null){
            
            mainShow = firstShow;
        }
        return mainShow;
    };




    return (
        <SimpleContext.Provider
        value={{
            clickHandlerToZero : clickHandlerToZero ,
            click : click ,
            setClick : setClick ,
            Show : Show
        }}> 
        <div>
            <CacheProvider value={cacheRtl}>
            {Show()}
                    
            </CacheProvider>
        </div>
        </SimpleContext.Provider>

    )



};


export default AddNewComment;