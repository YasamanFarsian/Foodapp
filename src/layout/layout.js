import React from 'react';
import Header from './header/header';
import classes from './layout.module.css'

export default function  Layout({children}){

return(
<div className={classes.container}>
      <Header />
      <div>{children}</div>
    </div>
)

}