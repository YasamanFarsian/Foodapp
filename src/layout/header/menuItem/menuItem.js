import React from "react";
import classes from './menuItem.module.css';

export default function MenuItem({title,to,children}){
    const handleClick = (e) => {
        e.preventDefault();
        window.history.pushState('', '', to);
      };
return(


<a className={classes.menuItem} onClick={handleClick} href={to}>{title}</a>


)
}