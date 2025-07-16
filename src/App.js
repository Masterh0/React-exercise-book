import { useContext,useEffect } from "react";
import BookCreate from "./components/bookCreate";
import BookList from "./components/bookList";
import bookContext from "./context/books";
function App() {
  const {stableFetchData} = useContext(bookContext)
  useEffect(()=>{
    stableFetchData();
  }, [stableFetchData] )

  
return (
    <div>
      <BookList  />
      <BookCreate />
    </div>
  );
  }
  

export default App;
