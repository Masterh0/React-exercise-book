import { useState , useContext } from "react";
import bookContext from "../context/books";
function BookCreate (){
    const {createBook} = useContext(bookContext);
    const [title , setTitle] = useState('');
    const onChange = (input)=>{
        setTitle(input.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        createBook(title);
        setTitle("")
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label >title</label>
            <input  value={title} onChange={onChange}/>
            <button>submit</button>
        </form>
    </div>
}
export default BookCreate;