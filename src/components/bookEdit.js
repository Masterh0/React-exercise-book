import { useState,useContext } from "react";
import bookContext from "../context/books";
function BookEdit ({book , onSubmit}){
    const [title , setTitle] = useState(book.title);
    const {editBook}= useContext(bookContext);
    const onChange =(event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        onSubmit()
        editBook(book.id, title)
    }
    return <form onSubmit={handleSubmit}>
            <label>title</label>
            <input value={title} onChange={onChange}/>
            <button>submit</button>
        </form>
}
export default BookEdit;