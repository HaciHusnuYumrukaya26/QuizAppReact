import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Introduce.css";
const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate=useNavigate();
  const TOTAL_QUESTİONS=10;
  const startQuiz=()=>{
    if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`);
    }
  }
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="data:image/png;base64,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"
          alt=" logo"
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">Quize başla</div>
      </div>
    </div>
  );
};

export default Introduce;
