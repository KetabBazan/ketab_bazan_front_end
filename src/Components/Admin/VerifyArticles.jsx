import { Button, Dialog, IconButton } from "@mui/material"
import ArticleCard from "./Comment/tabContent/articleCard"
import { Divider, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


const VeriFyArticles = ({ article, refresh }) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(550));

    const [dialogStatus, setDialogStatus] = useState(false)

    const [verifyIsLoading, setVerifyIsLoading ] = useState(false)
    const [declineIsLoading, setdeclineIsLoading ] = useState(false)

    const {
        id, image, title, summary, created_jalali, isverified, text
    } = article

    const onVerifyClicked = ()=>{
        setVerifyIsLoading(true)
        // axios post to verify article with this id
        // refresh list of articles and remove this one
        // refresh()
    }

    const onDeclineClicked = ()=>{
        setdeclineIsLoading(true)
        // axios post to decline article with this id
        //axios.post("dasdadas/"+id,{
        //    Headers:{
        //        auther:"token "
        //    }
        //})
        // refresh list of articles and remove this one
        // refresh()
    }

    return <div>
        <Grid
            style={{
                marginTop: "3px",
                display: "flex",
                textDecoration: "none",
            }}
            key={id}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                }}
            >

                <img
                    src={image}
                    alt="img"
                    style={{
                        width: "140px",
                        height: "100%",
                        borderRadius: "2px",
                        objectFit: "conver",
                    }}
                />
                <div>

                    <div
                        style={{
                            fontWeight: "bold",
                            marginRight: "10px",
                            color: "black",
                        }}
                        className="showar_title"
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            color: "#757C86",
                            overflow: "Hidden",
                            whiteSpace: "normal",
                            textOverflow: "ellipsis",
                            textJustify: "inter-word",
                            textAlign: "justify",
                        }}
                        className="showall_summary"
                    >
                        {isMatch
                            ? summary.slice(0, 100) + "..."
                            : summary.slice(0, 250) + "..."}
                    </div>
                    <Grid
                        style={{
                            marginTop: "3px",
                            marginRight: "10px",
                            color: "#757C86",
                        }}
                        className="showar_tarikh"
                    >
                        {"تاریخ مقاله:" + created_jalali}
                    </Grid>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <Button disabled={verifyIsLoading} onClick={onVerifyClicked} variant="outlined" color="success">
                    Verify
                </Button>

                <Button disabled={declineIsLoading} onClick={onDeclineClicked} variant="outlined" color="error">
                    Decline
                </Button>

                <Button onClick={() => { setDialogStatus(true) }} variant="outlined">
                    Text
                </Button>
            </div>

        </Grid>
        <Divider
            style={{ color: "red", width: "100%", marginTop: "2%" }}
        />

        <Dialog open={dialogStatus}>
            <div style={{ padding: "24px", paddingTop:"42px" }}>
            {text}
            </div>
            <IconButton
          aria-label="close"
          onClick={() => { setDialogStatus(false) }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </Dialog>
    </div>
}

export default VeriFyArticles