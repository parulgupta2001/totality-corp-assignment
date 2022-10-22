import { LeftNav, MainContent, RightNav } from "./components/index";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [posts]);

  return (
    <div className="App">
      <LeftNav />
      <MainContent posts={posts} />
      <RightNav posts={posts} className="rightNav" />
    </div>
  );
}

export default App;
