import react , {useState} from 'react';


export function Info({ key,fname1, lname1, colur, ckickAction }) {
    return (
      <>
        <h3 style={{ color: colur }} onClick={ckickAction} >{fname1}</h3>
        <h4>{lname1}</h4>
  
      </>
    )
  }


export default function FullName(){


    const [count, setCount] = useState(1);

  const people = [

    {
      id: 1,
      fname: 'yasi',
      lname: 'sani'
    },
    {
      id: 2,
      fname: 'arzon',
      lname: 'barua'
    }

  ];

  function Counter() {
    console.log('hhh')
    setCount(count + 1);
  }
return(
<>
    {people.map(({ key, fname, lname }) => (
        <>
          <Info key={key} fname1={fname} lname1={lname} colur='red' ckickAction={Counter} />
          <p>{count}</p>
        </>
      )
      )}
      </>
)

}