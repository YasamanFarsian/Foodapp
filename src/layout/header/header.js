import classes from "./header.module.css";
import Logo from "./logo/logo";
import MenuItem from "./menuItem/menuItem";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>
        <MenuItem title="Sign In" to="/signin" />
      </div>
      <Logo />
      <div>
        <MenuItem title="All Orders" to="/AllOrders" />
        <MenuItem title="Order" to="/Order" />
      </div>
    </div>
  );
}