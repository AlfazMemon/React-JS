import { useState } from "react";

function App() {
  const restart = 0;
  const [value, setValue] = useState(restart);

  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          {value}
        </h1>

        <button
          onClick={() => setValue(value - 1)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#dc3545",
            color: "white",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={()=>setValue(restart)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#6c757d",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        <button
          onClick={() => setValue(value + 1)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;