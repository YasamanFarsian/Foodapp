import React, { useState } from 'react';
import classes from './gender.module.css';
import Title from './title/title';
import People from './people/people';

export default function PeopleList(children){
const [keyword,setKeyword] = useState('');
const people=[

    { id: 1, firstName: 'Yasaman', lastName: 'Farsian', gender: 'Female' },
    { id: 2, firstName: 'Mohammad', lastName: 'Farsian', gender: 'Male' },
    { id: 3, firstName: 'Mehdi', lastName: 'Sani', gender: 'Male' },
    { id: 4, firstName: 'Lida', lastName: 'Bigdeli', gender: 'Female' },
    { id: 1, firstName: 'Yasaman', lastName: 'Farsian', gender: 'Female' },
    { id: 2, firstName: 'Mohammad', lastName: 'Farsian', gender: 'Male' },
    { id: 3, firstName: 'Mehdi', lastName: 'Sani', gender: 'Male' },
    { id: 4, firstName: 'Lida', lastName: 'Bigdeli', gender: 'Female' },
];
const men = people.filter(data => data.gender === 'Male' && JSON.stringify(data).includes(keyword));
const women = people.filter(data => data.gender === 'Female'  && JSON.stringify(data).includes(keyword));


//controlled ***
//uncontrolled

return(
    <div className="people-container">
        <input type="text" value={keyword}  onChange={(e)=> setKeyword(e.target.value)}/>
        <p>{keyword}</p>
      <People title="Men" list={men} />
      <People title="Women" list={women}/>
    </div>
)


}