import About from "./components/About";
import Appbar from "./components/Appbar";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import QuizApi from "./pages/QuizApi";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="Quiz" element={<Quiz />}></Route>
          <Route path="quizapi/:type" element={<QuizApi />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
