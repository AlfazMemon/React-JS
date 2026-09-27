import { Bookmark } from "lucide-react"
import "./App.css"

const App = () => {
  return (
    <div>
      <div className="parent">

        <div className="card">

         <div>
           <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10" alt="" />
              <button>Save <Bookmark size={12}/></button> 
          </div>

          <div className="centre">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
              <div className="tag">
                <h4>Part time</h4>
                <h4>Senior Level</h4>
              </div>
          </div>
         </div>

          <div className="bottom">
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
              </div>
              <div>
                <button>Apply Now</button>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
