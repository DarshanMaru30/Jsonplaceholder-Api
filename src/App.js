import "./App.css";
import Albums from "./Component/Albums";
import Main from "./Component/Main";
import { Routes, Route } from "react-router-dom";
import Post from "./Component/Post";
import Comment from "./Component/Comment";
import Photo from "./Component/Photo";
import Todo from "./Component/Todo";
import User from "./Component/User";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
