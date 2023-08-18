import { Button, List, TextField, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Query } from "../../service/search.service";
import { toast } from "react-toastify";
import { style } from "../Header/style";



export const Search = () => {
  const [query, setQuery] = useState("");  
  const [bookList, setBookList] = useState([])
  const navigate = useNavigate()
  const classes=style();

    const sendQuery = (keyword) =>  {
      Query(keyword).then((res) => {
        setBookList(res)
      })
    }
    return (
      <div className={classes.wrapper}>
        <div className="searchbox">
        <br />
        <TextField name="query" variant="outlined" label="Search" size="small" onChange={ (e) => {setQuery(e.target.value)}}/>
        &emsp;
        <Button variant="contained" color="Secondary" disableElevation onClick={() => {
              sendQuery(query)}}>Search</Button>
          <>
          {query?.length === 0 && (
                          <p>No product found</p>
                        )}

                        <List>
                          {bookList?.length > 0 &&
                            bookList.map((item, i) => {
                              return (
                                <ListItem key={i}>
                                  <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={item.name}
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          component="span"
                                          variant="body2"
                                          color="textPrimary"
                                        >
                                        {item.description}
                                        </Typography>
                                        
                                      </React.Fragment>
                                    }
                                    />
                                </ListItem>
                              );
                            })}
                        </List>
          </>
        </div>
        </div>
    )
}