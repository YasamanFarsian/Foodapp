import classes from "./burgerImage.module.css";

export default function BurgerImage({ meat, salad, cheese }) {
  
  const build = (ingredient,count) => {
    const result = [];
    for (let i = 1; i <= count; i++) {
      result.push(<div className={classes[ingredient]}></div>);
    }
    return result
  };


  return (
    <div className={classes.container}>
      <div className={classes.topbread}>
        <div className={classes.seeds1} />
        <div className={classes.seeds2} />
      </div>
    
      {build('meat',meat)}
      {build('cheese',cheese)}
      {build('salad',salad)}
      
      <div className={classes.bottombread}></div>
    </div>
  );
}