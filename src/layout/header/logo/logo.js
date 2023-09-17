import logo from "./burgerlogo.png";
import classes from './logo.module.css';

export default function Logo() {
  return <img src={logo} className={classes.logo}  />;
}