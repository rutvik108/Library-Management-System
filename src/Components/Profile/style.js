import { makeStyles } from '@material-ui/core/styles';
export const style = makeStyles({
wrapper:{
    "& .btnclk": {
        backgroundColor:"black",
        color :"white"
    },
    "& .SignupTable":{
       
    },
    "& .SignupHeader":{
        color:"red"
    },
    "& .redline" :{
            backgroundColor:"red",
            width:"400px"         
    },
   
    "& .personalInfoHeader" :{
           textAlign:"left",
           margin:"0 20%"
    },
    "& .registerPage":{
        margin:"0 20%"
    },
    "& .LoginHeader":{
        textAlign:"left",
        margin:"0 20%"
    },
    "& .error":{
        textAlign:"left",
        color:"red"
    },
    "& .registerbtn":{
       
    }
}
});