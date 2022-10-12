import { useState, useEffect } from "react";

const buttonNames = ["posts", "albums", "users"];

function ShowButtton() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show Button</button>
      <div></div>
      {show &&
        buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => setType(buttonName)}
            style={
              type === buttonName
                ? {
                    color: "#fff",
                    backgroundColor: "#333",
                  }
                : {}
            }
          >
            {buttonName}
          </button>
        ))}
      <div>
        <ul>
          {show &&
            posts.map((data) => (
              <li key={data.id}>{data.title || data.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowButtton;
