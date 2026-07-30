import { useEffect, useState } from "react";

function App(){

  const [value,setvalue] = useState([])
  const[page,setPage] = useState(1)

  function FetchData(){

  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
  .then((res)=>res.json())
  .then((data)=>setvalue(data))
  .catch((err)=>console.log(err))
  
  }

  useEffect(()=>{

    FetchData();
    
  },[page])

  
  return (
    <div>
      {
        value.map((el)=>

        <div key = {el.id} style={{border:' 1px solid black', marginBottom: '5px', textAlign :'center'}}>
          <i>{el.id}</i>
          <p>{el.title}</p>
          <p>{el.body}</p>
          
        </div>)
        
      }
      <button onClick={()=>setPage(page-1)}>prev</button>
      {page}
      <button onClick={()=>setPage(page+1)}>next</button>
    </div>
  )
}

export default App