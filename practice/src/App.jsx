import './App.css'
function App(){

  return(
    <div className='grid grid-cols-5 text-center'>
      <div className='col-span-1 h-screen'>
      <h1>Hello</h1>
      </div>

      <div className='bg-zinc-800 h-screen col-span-4  text-white' >
    
    <div className='container h-130'>

    </div>

    <div>
      <input type="text" placeholder='Ask Anything Here'  className='border-gray-100'/>
      <button>Ask</button>
    </div>
  

      </div>
    </div>
  )
}

export default App