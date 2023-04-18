import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";
const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/" exact element={<Introduce/>}/>
        <Route path="/quiz/:difficult/:amount" element={<Quiz/>}/>
      </Routes>
    </Router>
  </div>;
};

export default App;
