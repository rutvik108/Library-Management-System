import { makeStyles } from '@material-ui/core/styles';
export const style = makeStyles({
wrapper:{

    "& .back-Color": {
        // backgroundColor:"black"
    },
    "& .search":{
        backgroundColor:"#FFFAF1"
    },
    "&& .logoheader":{
        marginTop: "0px",
        marginLeft: "10px",
        color:"red"
    }, 
    "& .listitm":{
         float: "right",
         marginRight: "3%"
    },
    "& .header-search":{
    textAlign:"center"
    },
    "&&& .btn1":{
        marginLeft:"20px",
        backgroundColor:"green",
        color:"white"
    },
    "& .searchbox":{
        textAlign: "center"
    }
}
});