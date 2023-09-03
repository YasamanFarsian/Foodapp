import React from 'react';
import classes from './header.module.css';

export default function Header({children}){


    return(

<div className={classes.header}>


<h1>header</h1>

{children}
</div>

    )
}