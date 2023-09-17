import { useState } from 'react'
import Notes from './components/Notes'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [notes, setNotes] = useState([])
const addNewNote = (e) => {
const newNotes = [...notes, e];

newNotes.filter((note) => !note.id && (note.id = uuidv4()));
setNotes(newNotes); 
};
const deleteNote = (id) => {
  setNotes(notes.filter((del) => del.id !== id));
}
const bgCard = [
"bg-red-500",
"bg-yellow-500",
"bg-green-500",
"bg-blue-500"
];

const randomBgColor = () => {
  const random = Math.floor(Math.random()*bgCard.length)
  return bgCard[random];
}
  return (
    <>
    <div className='flex flex-col'>
      <div className='flex justify-center pt-5'>
      <button
      onClick={addNewNote}
      type="button"
      className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
      Add Note
    </button>
      </div>
    <div className='flex justify-center mt-5'>
      <div className='flex flex-row justify-center w-1/2 flex-wrap'>
      {notes.map((note) => (<Notes key={note.id} note={note} onClick={deleteNote} cardColor={randomBgColor}/>))}
      </div>
    </div>
    </div>
    </>
  )
}

export default App
