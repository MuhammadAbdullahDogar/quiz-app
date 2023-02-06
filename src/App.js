import Appbar from "./components/Appbar";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import QuizApi from "./pages/QuizApi";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Result from "./pages/Result";
import LandingPage from "./pages/LandingPage";



function App() {

  return (
    <>
      <div className="App" >
        <Appbar />
        <Routes>
          {/* <Route path="/" element={<LandingPage/>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="quizapi/:type" element={<QuizApi />}></Route>
          <Route path="result/:score" element={<Result />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
