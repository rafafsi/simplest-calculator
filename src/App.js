import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(0);
  const resultRef = useRef(null);
  const inputRef = useRef(null);

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const subtract = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="calculator">
      <div>
        <h1>Calculator</h1>
        <div></div>
        <h2 ref={resultRef}>{result}</h2>
        <input
          type="number"
          placeholder="type a number"
          ref={inputRef}
          pattern="[0-9]"
        />
      </div>

      <div className="btns">
        <button onClick={add} className="operation-btn">
          add
        </button>
        <button onClick={subtract} className="operation-btn">
          subtract
        </button>
        <button onClick={multiply} className="operation-btn">
          multiply
        </button>
        <button onClick={divide} className="operation-btn">
          divide
        </button>

        <div>
          <button className="reset-btn" onClick={resetInput}>
            reset input
          </button>
          <button className="reset-btn" onClick={resetResult}>
            reset result
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

