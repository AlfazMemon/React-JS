import { useEffect, useState } from "react"

function App() {
  const [value, setvalue] = useState(true)
  const [Data, setData] = useState(789)
  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      {/* Profile Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src="https://scontent.cdninstagram.com/v/t51.82787-19/609176487_18036573659742087_4097993544011406127_n.jpg?_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=SOoSD7OUGCMQ7kNvwF28uQ3&_nc_oc=Adpub1dSY9enmEIHln51_tVowGS0SgGMKqpuNiULlJ7Bkzkfckl3nGYZMTi1izgax084lRo-ENIksRVtSwRYoVAo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=1blNPqPHFxJUo2HrB-c6aA&_nc_ss=7b6a8&oh=00_AQBx_R86-wFb4hr7cO2LjqXLBNuH0CgKG-IJYQrRJveS1Q&oe=6A6E41AC"
          alt="Profile"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        <div>
          <h2 style={{ margin: "0" }}>alfaz_memon</h2>

          <button
            style={{
              marginTop: "10px",
              padding: "8px 20px",
              backgroundColor: "#0095f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => {
              value
                ? setData(prev => prev + 1)
                : setData(prev => prev - 1);

              setvalue(!value);
            }}
          >

            {value ? "follow" : "following"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          textAlign: "center"
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>42</h3>
          <p style={{ margin: 0 }}>Posts</p>
        </div>

        <div>
          <h3 style={{ margin: 0 }}> {Data}</h3>
          <p style={{ margin: 0 }}>Followers</p>
        </div>

        <div>
          <h3 style={{ margin: 0 }}>320</h3>
          <p style={{ margin: 0 }}>Following</p>
        </div>
      </div>

      {/* Bio */}
      <div style={{ marginTop: "20px" }}>
        <strong>Alfaz Memon</strong>
        <p style={{ margin: "5px 0" }}>
          💻 React Developer <br />
          🚀 Learning Full Stack <br />
          📍 India
        </p>
      </div>

     
    </div>
    
  )

}

export default App