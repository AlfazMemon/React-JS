import './App.css'
import Slider from './component/slider'
const App = () => {
  return (
    <div >
     
     <nav>
       <div className="logo">Logo</div>
      <div className="link">
        <a href="">Home</a>
        <a href="">Product Page</a>
        <a href="">About Page</a>
        <a href="">Contact Page</a>
      </div>

      <div className="icons">
        <button>Sign In</button>
      </div>
     </nav>

     <Slider/>

    </div>
  )
}

export default App
