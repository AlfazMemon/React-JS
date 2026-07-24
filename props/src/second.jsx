function Second(props)
{
    console.log(props.image)
    return(
        <div
  style={{
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial",
  }}
>
  <img
    src={props.image}
    alt={props.image}
    style={{
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />

  <h2
    style={{
      fontSize: "20px",
      margin: "15px 0 10px",
      color: "#333",
    }}
  >
    {props.name}
  </h2>

  <p
    style={{
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.5",
      marginBottom: "15px",
    }}
  >
    {props.description}
  </p>

  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    View Details
  </button>
</div>
    )
}

export default Second