import React from 'react';
import classes from './ingredients.module.css';

 function Ingridients({ title, count, onAdd, onRemove }) {
    console.log(title, 'dddd');
    const handleAdd = () => {
        if (count < 5) {
            onAdd(title.toLowerCase());
        }
    }
    const handleRemove = () => {
        if (count > 0) {
            onRemove(title.toLowerCase());
        }
    }

    return (
        <div className={classes.container}>
            <span className={classes.title}>{title}</span>
            <button onClick={handleRemove}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>

    )
}
export default React.memo(Ingridients);