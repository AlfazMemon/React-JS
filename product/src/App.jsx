import { useEffect, useState } from "react";

function App() {

  const [data, setdata] = useState([])

  function FetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setdata(data))
  }

  useEffect(()=>{
    FetchData();
  },[])
  
  return (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "20px",
    }}
  >
    {data.map((el) => (
      <div
        key={el.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={el.image}
          alt={el.title}
          style={{
            width: "150px",
            height: "180px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />

        <h3
          style={{
            fontSize: "16px",
            height: "50px",
            overflow: "hidden",
          }}
        >
          {el.title}
        </h3>

        <p style={{ color: "green", fontWeight: "bold" }}>
          ${el.price}
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#555",
          }}
        >
          {el.category}
        </p>

        <p>
          ⭐ {el.rating.rate} ({el.rating.count} Reviews)
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>
    ))}
  </div>
);
}

export default App