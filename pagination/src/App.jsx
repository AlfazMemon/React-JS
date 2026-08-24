import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);

  function FetchData() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    FetchData();
  }, [page]);

  return (
    <div className="container">

      <div className="header">
        <h1>★ POST DATABASE ★</h1>
        <p>Classic Web Data Explorer</p>
      </div>

      {value.map((el) => (
        <div className="post" key={el.id}>

          <span className="post-id">
            POST #{el.id}
          </span>

          <p className="post-title">
            {el.title}
          </p>

          <p className="post-body">
            {el.body}
          </p>

        </div>
      ))}

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ◀ PREV
        </button>

        <span className="page-number">
          PAGE {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
        >
          NEXT ▶
        </button>

      </div>

    </div>
  );
}

export default App;