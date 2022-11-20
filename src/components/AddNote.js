import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText]=useState('')

    let CharacterCount = 200;

    const handleChange = (event) => {
    if (CharacterCount-event.target.value.length >= 0){
        setNoteText(event.target.value)
    }
        
        
    }

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('')
        }
        
    }
    
    return (
        <div className="note new">
            <textarea   
                rows='8' 
                cols='10' 
                placeholder="Type the note you want..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{CharacterCount-noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    );
};

export default AddNote