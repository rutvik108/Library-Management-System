import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { style } from './style';
import { Button, TextField } from '@material-ui/core';
import { Search } from '../Search/Search';
// import Search from './Search';

const Header = () => {
    const classes = style();
    return (
       <div  className={classes.wrapper}>
        <div className='back-Color'>
        <div>
            <br/>
            <h2 className='logoheader'> Tatvasoft Project

            <div className='listitm'><NavLink to="/register">User</NavLink>   </div>
            <div className='listitm'><NavLink to="/login">Login</NavLink>   </div>
            <div className='listitm'><NavLink to="/register">Register</NavLink>  </div>
                    
            </h2>          
           
        </div>

       </div>
        <Search/>
       {/* for search btn */}
       {/* <div className='search'>
            <div className='header-search'>
                <div className='header-search-area'>
                    <br/>
                    <TextField className='place' variant='outlined' type='text' placeholder='What are you Looking for...' />

                    <Button type='submit' className='btn1'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxODY2QkI2NjkyQTExRUNCRTgxOTU5QzE4OTBGQTg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxODY2QkI3NjkyQTExRUNCRTgxOTU5QzE4OTBGQTg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDE4NjZCQjQ2OTJBMTFFQ0JFODE5NTlDMTg5MEZBODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDE4NjZCQjU2OTJBMTFFQ0JFODE5NTlDMTg5MEZBODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4BcWxyAAABeUlEQVR42qSUzytEURTHL+NHaRZvQ9EoiphkIykrKRs2lvbKX6EM/wQLZWHjD8Bm1DRCFsMfwJRiMc3zoySmFHN9D+dNZ67jzdWc+vTO657zve+cd+411lrjMADWQQG8gQ9wC3bBAmhRcmrIFwpcBe823s7AYCPBBNhTkh/AnbLJPRiPE8yI4CrYAUMisAusgJKIuwFJTbAfVITYckyP+kBRiGY0wQ0RsB3XcGYCfHJ8yO2qE7wQgiMegkRW5EzLtVZjTNr82CO4Mn52Kvy0XCDBTvYrxt9ehJ9wBUvs94Kkp+CY8ENXMM9+O1jyEKNNF9mvgvO6VTRyXjSY5izV4IdsivjDvwb7WAQVeTRcIRriLefEzLpx3wcdlgKXoEeUkgMn4JX/JJXZ7ZRPOXPgWZYcMQqu7f+N5jjQbpuorDXwpCTS6TgAM3y1qaJRya51gCkwDNpAGRT4SRaAIzD5q3zPo6YRKF+634ygJho2KxiJUm/LdPV9CTAAO6/JBy0uiRAAAAAASUVORK5CYII=' alt='Logo' />
                        <b>Search</b></Button>
                    <br/> <br/>
                </div>
            </div>
        </div> */}

        </div>
       
    );
}

export default Header;