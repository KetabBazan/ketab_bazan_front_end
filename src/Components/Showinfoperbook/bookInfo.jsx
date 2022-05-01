import React, { useState, useEffect } from "react";
import {Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import {Link,useParams,} from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';  
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Alert from '@mui/material/Alert';
import ChangeNav from './../Navbar/changeNav';


const Emti = () => {

    let s1 = {
        margin: "100px auto auto auto"
    }
    let p1 = {
        height: "500px",
    }
    let p2 = {
        height: "500px",
        border: "none"
    }
    let p3 = {
        height: "500px",
        border: "none"
    }
    let imgstyle = {
        width: 230,
        height: 280,
        margin: "20px auto auto auto",
        borderRadius: "7px",
        border: "1px solid "
    }
    let typo0 = {
        margin: "30px 10px auto auto",
        fontSize: 23
    }
    let typo2 = {
        margin: "auto 10px auto auto",
        fontSize:"30px",
        color: "#000000"
    }
    let typo3 = {
        margin: "auto 10px auto auto",
        fontSize: 14,
    }
    let typo4 = {
        margin: "15px 30px auto auto",
        fontSize: 20
      }
      let typo5 = {
        margin: "15px 30px auto auto",
        fontSize: 20,
      }
      let typo6 = {
        margin: "40px 30px auto auto",
        fontSize: 20
      }
      let typo8 = {
        margin: "55px auto auto auto",
        fontSize: 14
      }
      let typo9 = {
        //margin: "0px 660px auto auto",
        fontSize: 23,
        color: "#0052cc"
      }
    


    const handleLoginForReadPdf = () =>{

        let flag = localStorage.getItem("token")
    
        if(flag === null){      
          setto("/bookinfo/"+params.id)
          return to;
        }
        else{
          setto("/ReadPdf/"+params.id)
          return to;
        }
    }
      
    const [apiLoading, setApiLoading] = useState(false);
    const [bookinfo, setbookinfo] = useState([]);
    const params = useParams();
    const id = params.id;
    const [to, setto] = React.useState(null);
  
    useEffect(() => {
        setApiLoading(true);
        axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
        setbookinfo(response.data.book_info);
        console.log(response.data.book_info);
        setApiLoading(false);
        });
    }, []);
  

    return ( 
        <div dir="rtl">
            <ChangeNav/>

            <Grid lg={10} xs ={10} container item spacing={2} style={s1}>

                <Grid item lg={3} xs={12}>
                    <Paper style={p1} elevation={1}>
                        <center>
                            <Grid>
                                <img alt="complex" src={bookinfo.image_url} style={imgstyle}/>
                            </Grid>

                            <Grid>
                                <Typography style={{margin:"20px auto auto auto", fontSize:14}}>امتیاز شما به این محصول !؟</Typography>
                            </Grid>

                            <Grid>
                                <Rating style={{direction:"ltr", top:"10px",}} size="large" name="no-value" precision={1} value={null} />
                            </Grid>

                            <Grid>
                                <Button
                                    startIcon={<CreateIcon style={{margin: "auto -40px auto auto"}}/>}
                                    variant="outlined"
                                    component={Link}
                                    to={`/article/${id}`}
                                    style={{
                                    backgroundColor: "CAE5F3",
                                    borderRadius: "10px",
                                    margin: "25px auto auto auto",
                                    fontWeight: 800,
                                    width: "200px",
                                    height: "40px",
                                    }}
                                >
                                    نوشتن مقاله
                                </Button>
                            </Grid>
                        </center>
                    </Paper>
                </Grid>


                <Grid item lg={6} xs={12}>
                    <Paper style={p2} elevation={1}>
                        <Grid>
                            <Typography style={typo2}>
                                {bookinfo.name}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo3}>
                                امتیاز محصول : 4.5 از 5 <span style={{color:"#0052cc"}}>( 52 نفر امتیاز داده است )</span>
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo0}>
                            مشخصات کتاب :
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo5}>
                                {"دسته بندی : " + bookinfo.genre_name}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo4}>
                                {"نویسنده : " + bookinfo.author}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo5}>
                                {"انتشارات : " + bookinfo.publisher}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography style={typo6}>
                                خلاصه کتاب :
                            </Typography>
                        </Grid>

                        <Grid xs={10}>
                            <Typography style={{margin: "10px 30px auto auto",  overflow:"Hidden", whiteSpace:"normal" , textOverflow: "ellipsis",  fontSize: 14, width:"350px" ,direction:"rtl",height:"70px", border:"1px solid #ffffff"}}>
                                {bookinfo.summary}
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>


                <Grid item lg={3} xs={12}>
                    <Paper style={p3} elevation={1}>
                        <center>
                            <Grid>
                                <Button
                                    startIcon={<PictureAsPdfIcon style={{margin: "auto -65px auto auto"}}/>}
                                    variant="outlined"
                                    style={{
                                    backgroundColor: "CAE5F3",
                                    margin: "20px auto auto auto",
                                    borderRadius: "10px",
                                    fontWeight: 800,
                                    width: "200px",
                                    height: "40px",       
                                    }}
                                    to={handleLoginForReadPdf}
                                    component={Link}
                                >
                                    مطالعه کتاب
                                </Button>
                            </Grid>

                            <Grid>
                                <Typography style={{margin:"60px auto auto auto", fontSize:14}}>
                                آیا کتاب را خوانده اید !؟
                                </Typography>
                            </Grid>

                            <Grid>
                                <Button
                                    startIcon={<MarkChatReadIcon style={{margin: "auto -65px auto auto"}}/>}
                                    variant="outlined"
                                    component={Link}
                                    style={{
                                    backgroundColor: "CAE5F3",
                                    margin: "10px auto auto auto",
                                    borderRadius: "10px",
                                    fontWeight: 800,
                                    width: "200px",
                                    height: "40px",
                                    }}
                                >
                                    خوانده ام
                                </Button>
                            </Grid>

                            <Grid>
                                <Button
                                    startIcon={<AutoStoriesIcon style={{margin: "auto -50px auto auto"}}/>}
                                    variant="outlined"
                                    component={Link}
                                    style={{
                                    backgroundColor: "CAE5F3",
                                    margin: "7px auto auto auto",
                                    borderRadius: "10px",
                                    fontWeight: 800,
                                    width: "200px",
                                    height: "40px",
                      
                                    }}
                                >
                                    در حال خواندنم
                                </Button>
                            </Grid>

                            <Grid>
                                <Button
                                    startIcon={<MenuBookIcon style={{margin: "auto -65px auto auto"}}/>}
                                    variant="outlined"
                                    component={Link}
                                    style={{
                                    backgroundColor: "CAE5F3",
                                    margin: "7px auto auto auto",
                                    borderRadius: "10px",
                                    fontWeight: 800,
                                    width: "200px",
                                    height: "40px",
                                    }}
                                >
                                    نخوانده ام
                                </Button>
                            </Grid>

                            <Grid>
                                <Typography style={typo8}>
                                    قیمت محصول:
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography style={typo9}>
                                    {bookinfo.price} <span style={{fontSize:"10"}}> تومان</span>
                                </Typography>
                            </Grid>

                            <Grid>
                                <Button
                                    startIcon={<AddShoppingCartIcon style={{margin: "auto -40px auto auto"}}/>}
                                    variant="contained"
                                    component={Link}
                                    style={{
                                        backgroundColor: "CAE5F3",
                                        margin: "7px auto auto auto",
                                        borderRadius: "10px",
                                        fontWeight: 800,
                                        width: "200px",
                                        height: "40px",
                                    }}
                                >
                                    افزودن به سبد خرید
                                </Button>
                            </Grid>
                        </center>
                    </Paper>
                </Grid>


            </Grid>

        </div>
     );
}
 
export default Emti;