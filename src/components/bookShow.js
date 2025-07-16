import { useState ,useContext} from "react";
import bookContext from "../context/books";
import BookEdit from "./bookEdit";
function BookShow ({book}){
    const {deleteBook} = useContext(bookContext)
    const [edit, setEdit] = useState(false);
    const handleDelete = ()=>{
        deleteBook(book.id);
    }
    const handleEdit = ()=>{
        setEdit(!edit);
    }
    const handleSubmit=()=>{
        handleEdit();
    }
    let content = <h3>{book.title}</h3>;
    if (edit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }
        const imageUrl = `https://picsum.photos/seed/${book.id}/200/200`;
return <div className="book-show">
    <img src={imageUrl} alt="book" />
    {content}
        <div className="actions">
            <button className="edit " onClick={handleEdit}>
                Edit
            </button>
            <button className="delete " onClick={handleDelete}>
                Delete
            </button>
        </div>
</div>
}
export default BookShow;