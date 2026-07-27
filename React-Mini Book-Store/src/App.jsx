import { useState } from 'react';
import Fiction from './Components/Fiction';
import NonFiction from './Components/NonFiction';


function App() {
  
  const [book,setBook] = useState(true)

  return (
    <div>
      <div>
        <h1>Mini Book Store</h1>

        <button data-testid="toggle-btn" onClick={()=>setBook(!book)}> {book ? "Non Fiction Book" : "FictionBook"} </button>

        <div data-testid="conditional-container">
            {
              book ? <Fiction/> : <NonFiction/>
            }
        </div>
      </div>
    </div>
  );
}
export default App