import { useRef, useState } from "react";
import Button from "./Button";

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
    <div className="container shadow p-3 mb-5 align-middle bg-white rounded">
      <div className="row text-center p-2">
        <h1>Calculator</h1>
        <h2 className="display-2 bg-success rounded" ref={resultRef}>
          {result}
        </h2>
      </div>
      <div className="row">
        <form>
          <div className="card p-2">
            <input
              className="p-2 m-2 rounded-3 "
              type="number"
              placeholder="type a number"
              ref={inputRef}
              pattern="[0-9]"
            />
            <div className="btn-group btn-group-md p-1 m-1" role="group">
              <Button handle={add} style="btn btn-primary" text="Add" />
              <Button
                handle={subtract}
                style="btn btn-primary"
                text="Subtract"
              />
              <Button
                handle={multiply}
                style="btn btn-primary"
                text="Multiply"
              />
              <Button handle={divide} style="btn btn-primary" text="Divide" />
            </div>

            <div className="btn-group p-1 m-1" role="group">
              <Button
                handle={resetInput}
                style="btn btn-secondary"
                text="Reset input"
              />
              <Button
                handle={resetResult}
                style="btn btn-secondary"
                text="Reset result"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

