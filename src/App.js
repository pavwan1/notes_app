import React, { useEffect } from 'react';
import {nanoid} from "nanoid";
import {useState} from 'react';
import NotesList from './components/NotesList'
import Search from './components/search';
import Header from './components/Header';

const App = () => {

  const[notes,setNotes]= useState([
    {
      id:nanoid(),
      text: 'This is first note',
      date:'15/11/2022'},
    {
      id:nanoid(),
      text: 'This is second note',
      date:'20/11/2022'},
    {
      id:nanoid(),
      text: 'This is third note',
      date:'25/11/2022'},
      {
        id:nanoid(),
        text: 'This is fourth note',
        date:'30/11/2022'}
  ]);

  const [searchText, setSearchText] = useState('')
  const  [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
      console.log(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes]);


  /*here text is same as noteText in AddNote*/
  const addNote=(text) =>{  
    const date = new Date();
    const newNote =  {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }  
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }



const handleSearchNote = (e) => {
  setSearchText(e);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={handleSearchNote}/>   {/*setSearchNote also wroites*/}
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
            )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}/>
      </div>
    </div>
    
  )
}

export default App


// git add .
// git commit -m "first commit"
// git push origin main