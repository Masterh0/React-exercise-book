import BookShow from "./bookShow";
import { useContext } from "react";
import bookContext from "../context/books";
function BookList ({}){
  const {books}= useContext(bookContext);
    const renderedBooks = books.map((book)=>{
      return <BookShow  key={book.id} book={book}/>
    });
return <div className="book-list">
    {renderedBooks}</div>
}
export default BookList;