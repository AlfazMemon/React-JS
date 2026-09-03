import { useState } from 'react'
import './slider.css'
const Slider = () => {

  const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmTfOEEl3MpMz5WnLPy39aR89OTp91jLnYHHYnQ2K1w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7r5Q66WQmMtal07oZ-SDuLFKFSfGWVKtbrYEQXEPV6Q&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq-Vz8snJ-Rq_CGGqGr5CXMnMYGn7jBmjMRieqLL0uA&s=10"
  ]

  const [current,setCurrent] = useState(0);

  function NextSlide(){

    setCurrent((current + 1) % images.length)
    {console.log(current)}


  }

  function PrevSlide () {
    setCurrent ((current - 1 + images.length) % images.length)
  }

  return (
    <div className='slider'>
      <img src={images[current]} alt="slide" />
      
      <button className='prev' onClick={PrevSlide}>
          ❮
      </button>

      <button className='next' onClick={NextSlide}>
           ❯
      </button>

      <div className="dots">
        {images.map((_,index)=> (
          <span key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={()=>setCurrent(index)}>

          </span>
        ))}
      </div>

    </div>
  )
}

export default Slider
