import fiction from "../fiction.json";

export default function Fiction() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        Fiction Books
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyItems: "center",
          padding: "20px",
        }}
      >
        {fiction.map((ele, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={ele.img}
              alt={ele.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3>{ele.title}</h3>
            <p>Author: {ele.author}</p>
            <p>Year: {ele.year}</p>
            <h4>₹{ele.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}