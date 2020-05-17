import React, { useState , useEffect , useReducer } from 'react';
import PersonList from './components/PersonList';
import './App.css';
import { person_data } from './utils/constants';
import Search from './components/Search';
import PersonTable from './components/PersonTable';


const personReducer = (state,action) => {
  switch (action.type) {
    case 'SET_PERSON':
      return action.payload;
    case 'REMOVE_PERSON':
      return state.filter(
        person => action.payload.id !== person.id
      ) 
    default:
      throw new Error();
  }
}

const App = () => {

  const [person,dispatchPerson] = useReducer(personReducer,[]);
  const [isLoading,setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState(
    localStorage.getItem("searchText") || ''
  );

  const getPersonTitle = () => 'List of People!!!';

  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const handleRemovePerson = person => {
    dispatchPerson({
      type: 'REMOVE_PERSON',
      payload: person
    }); 
  }

  const getPersonAsync = () => 
    new Promise(resolve => 
      setTimeout(
        () => resolve({person: person_data}),
        2000
        ) 
      );

  useEffect(() => {
    setIsLoading(true);
    getPersonAsync().then(result => {
      dispatchPerson({
        type: 'SET_PERSON',
        payload: result.person
      })
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    localStorage.setItem("searchText",searchText);
  }, [searchText] );

  const filteredPersons = person.filter(person => {
    return person.first_name.includes(searchText) || person.last_name.includes(searchText);
  });

  return (
    <div class='App'>
      <h2 class='head'><u><i>{getPersonTitle()}</i></u></h2>
      <hr/>
      <Search value={searchText} onSearch={handleSearch}/>
      <h4 class='head'>Searching for : <u>{searchText}</u></h4>
      {isLoading ? (
        <p>Loading Courses ...</p>
      ):(
        <PersonList persons={filteredPersons} handleRemovePerson={handleRemovePerson}/>
      )}
      {isLoading ? (
        <p>Loading Table ...</p>
      ):(
        <PersonTable persons={filteredPersons}/>
      )}
    </div>
  );
}

export default App;
