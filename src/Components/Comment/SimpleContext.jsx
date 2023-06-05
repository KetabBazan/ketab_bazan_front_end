import { createContext } from "react";
import { useParams } from "react-router-dom";
const SimpleContext = createContext({
    flag:"",
    img:"",
    refresh : "" ,
    comments: [],
    comment: "",
    click : "" ,
    
    
    setClick : () => {} ,
    handleCreateNewComment: () => {},
   
    handleSetComment: () => {} , 
    
    intialize : () => {},

    clickHandlerToZero : () => {} ,
    Show : () => {} ,
    reshow : () => {},
    setRefresh : () => {},
    setFlag : () => {},
    setComments : () => {},
});

export default SimpleContext;