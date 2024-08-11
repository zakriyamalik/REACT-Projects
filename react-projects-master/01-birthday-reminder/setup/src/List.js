import React from 'react';

const List = ({people}) => {
  return (
    <>
     <h2>List People</h2>

     {people.map((person)=>{
       return<article className='person'>
        <li key={person.id}>
         <span><img src={person.image} alt='nope' className='img'></img></span>
         <br></br>
        <span>{person.name}</span>
        <span style={{ marginLeft: '30px' }}>{person.age}</span> 
       </li>

       </article> 
     })}
    </>
  );
};

export default List;
