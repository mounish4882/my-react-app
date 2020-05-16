import React from 'react';

const PersonList = ({persons,handleRemovePerson}) => {
    return persons.map(person => {
      return (
      <div key={person.id} class='Person'>
        <ul>
          <li>
            <i>{person.first_name} {person.last_name}</i>, <b>{person.Age}</b> - {person.About} - <span><button type='button' onClick={() => handleRemovePerson(person)}>Delete</button></span>
          </li>
        </ul>
      </div>
      )
    });
  }

export default PersonList;