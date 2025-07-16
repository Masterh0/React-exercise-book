import {createContext , useCallback, useState } from "react"
import axios from "axios";
const bookContext = createContext();
function Provider({children}){
     const  [books,setBooks]=useState([]);
      const fetchData = async ()=>{
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
      }
      const stableFetchData= useCallback(fetchData ,[]);
      const createBook = async (title)=>{
    const response = await axios.post("http://localhost:3001/books",{
      title
    })
    const updatedBooks = [
      ...books, response.data
    ]
    setBooks(updatedBooks);
  }
  const deleteBook = async (id)=>{
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks= books.filter((book)=>{
      return book.id !== id;
    });
    setBooks(updatedBooks);
    }
  const editBook = async (id , newTitle)=>{
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle
    });
     const updatedBooks= books.map((book)=>{
       if(book.id===id){
         return {
           ...book , ...response.data 
         } 
       }
       return book;
     });
       setBooks(updatedBooks);
    }
    
    const valueToShare ={
        books,
        stableFetchData,
        createBook,
        deleteBook,
        editBook
    }
    return <bookContext.Provider value = {valueToShare}>
        {children}
    </bookContext.Provider>
}
export {Provider};
export default bookContext;
