import About from "./components/About";
import Appbar from "./components/Appbar";
import {Routes,Route} from 'react-router';


function App() {
  return (
    <>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
