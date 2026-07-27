
import nonfiction from '../nonfiction.json'

export default function NonFiction() {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Non-Fiction Books
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {nonfiction.map((book, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={book.img}
              alt={book.title}
              style={{
                width: "180px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h2
              style={{
                fontSize: "18px",
                margin: "15px 0 10px",
              }}
            >
              {book.title}
            </h2>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <p>
              <strong>Year:</strong> {book.year}
            </p>

            <p
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              ₹{book.price}
            </p>

            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
