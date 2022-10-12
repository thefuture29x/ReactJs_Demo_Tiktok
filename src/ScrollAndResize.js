import { useState, useEffect } from "react";

const buttonNames = ["posts", "albums", "users"];

function ScrollAndResize() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [isOnTop, setIsOnTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
      <div>
        {isOnTop && (
          <button
            style={{
              color: "#000",
              position: "fixed",
              right: 20,
              bottom: 20,
            }}
          >
            Go To Top
          </button>
        )}
      </div>

      <div>Width: {width}</div>
    </div>
  );
}

export default ScrollAndResize;
