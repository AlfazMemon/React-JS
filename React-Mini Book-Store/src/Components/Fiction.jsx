import fiction from '../fiction.json'

export default function Fiction() {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Fiction Books
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {fiction.map((book, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
              backgroundColor: "#fff",
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

            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>
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
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
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
