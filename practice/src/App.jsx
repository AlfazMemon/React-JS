import { useState } from 'react'
import './App.css'
import { URL } from './constanst'
import Answer from './components/Answer'
function App() {

  const [question, setQuestion] = useState('')
  const [result, setResult] = useState([])

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const AskQuestion = async () => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();




      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      if (!res.ok) {
        console.log("ERROR:", data.error);
        return;
      }

      let datastring = data.candidates[0].content.parts[0].text;
      datastring = datastring.split("* ");
      datastring = datastring.map((item) => item.trim())

      console.log(datastring)
      setResult(datastring);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  return (
    <div className='grid grid-cols-5 text-center'>
      <div className='col-span-1 h-screen'>
        <h1>Hello</h1>
      </div>

      <div className='bg-zinc-800 h-screen col-span-4  text-white' >

        <div className='container h-130 overflow-scroll'>
          <div className='text-white '>
            <ul>
              {
                result.map((item, index) => (
                  <li key={index} className='text-left p-2'>
                    <Answer ans={item} index={index}/>
                  </li>
                ))
              }
            </ul>

          </div>

        </div>

        <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl 
        border border-zinc-700 flex h-16'>
          <input type="text" placeholder='Ask Anything Here' value={question} onChange={(e) => setQuestion(e.target.value)} className='border-gray-100 w-full h-full p-3 outline-none' />
          <button onClick={AskQuestion}>Ask</button>
        </div>


      </div>
    </div>
  )
}

export default App