import { useState } from "react";
import Fiction from "./component/Fiction";
import NonFiction from "./component/NonFiction";

function App() {
  const [Book, setBook] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Mini Book Store
        </h1>

        <button
          data-testid="toggle-btn"
          onClick={() => setBook(!Book)}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {Book ? "Non Fiction" : "Fiction"}
        </button>
      </div>

      <div data-testid="conditional-container">
        {Book ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;