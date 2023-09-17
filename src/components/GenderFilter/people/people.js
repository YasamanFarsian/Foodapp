import Title from "../title/title";

export default function People({title,list}){
    
    return(
        <div className="people-section">
        <Title title={title}/>
        <ul>
          {list.map(person => (
            <li key={person.id}>
              {person.firstName} {person.lastName}
            </li>
          ))}
        </ul>
      </div>
    )
}