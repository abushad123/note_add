import { useState, useEffect } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function Notes({onClick, note, cardColor}) {
    const [cardCol, setCardCol] = useState()

    useEffect(() => {
       !cardCol && setCardCol(cardColor);
    }, [cardCol])
  return (
    <>
   <div className={`w-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:${cardCol} dark:border-gray-700 me-3 mt-5`}>
    <div className='flex flex-row'>
        <span className="text-white text-1xl me-3"><AiOutlineEdit/></span>
        <span className="text-white text-1xl"> <AiOutlineDelete onClick={(e) => onClick(note.id)}/></span>
    </div>
    
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="message" rows="4" className="resize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 focus:outline-none focus:shadow-outline dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

    </div>

    </>
  )
}

export default Notes
