import React, { useCallback, useState } from 'react';
import Button from "../../components/button/button";
import classes from "./order.module.css";
import BurgerImage from "../BurgerImage/burgerImage";
import Ingredient from "../ingredients/ingredients";


export default function Order() {

/*   const [meat, setMeat] = useState(0);
  const [salad, setSalad] = useState(0);
  const [cheese, setCheese] = useState(0); */
  const[ingr, setIngr]=useState({
    meat:0,
    cheese:0,
    salad:0,
  });
 const{meat,cheese,salad}=ingr; 
/* const meat = ingr.meat
const salad = ingr.salad
const cheese = ingr.cheese */
  const test= useCallback(()=>{}, []);

  const handleAdd =useCallback((ingredient) => {

    setIngr((item)=>({...item, [ingredient]:item[ingredient]+1}))
  /*   switch (ingredient) {
      case 'meat':
        setMeat((item) => item + 1);
        break;
      case 'salad':
        setSalad((item) => item + 1);
        break;
      case 'cheese':
        setCheese((item) => item + 1);
        break;
      default:
        break;
    } */

    }, []) ;


 
  const handleRemove = useCallback((ingredient) => {
     setIngr((currentState)=>({...currentState, [ingredient]:currentState[ingredient]-1})) ;
   /*  switch (ingredient) {
      case 'meat':
        setMeat((item) => item - 1);
        break;
      case 'salad':
        setSalad((item) => item - 1);
        break;
      case 'cheese':
        setCheese((item) => item - 1);
        break;
      default:
        break;

    } */
  }, [])
const priceCalc = ()=>{

  const meatPrice= meat * 2000;
  const saladPrice= salad * 1200;
  const cheesePrice= cheese * 350;
  return cheesePrice+meatPrice+saladPrice;
}

  return (
    <div className={classes.container}>
      <BurgerImage meat={meat} salad={salad} cheese={cheese} />
      <Ingredient title='meat' count={meat} onAdd={handleAdd} onRemove={handleRemove} />
      <Ingredient title='salad' count={salad} onAdd={handleAdd} onRemove={handleRemove} />
      <Ingredient title='cheese' count={cheese} onAdd={handleAdd} onRemove={handleRemove} />
      <p>Price: {priceCalc()}</p>
      <Button title='Order' onClick={() => { }} />

    </div>
  );
}