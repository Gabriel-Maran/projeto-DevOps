import { useContext, useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(null);
  const [typeOper, setTypeOper] = useState("+");
  const [errorMessage, setErrorMessage] = useState(null);
  const [numHandler, setNumHandler] = useState(0);

  function addNumHandler(num) {
    setNumHandler(numHandler * 10 + num);
  }
  function setOperation(oper) {
    if (num1 == null) {
      setNum1(numHandler);
      setNumHandler(0);
    }
    setTypeOper(oper);
  }

  function zerarTudo() {
    setNum1(null);
    setTypeOper("+");
    setNumHandler(0);
    setErrorMessage(null);
  }

  function realizarOperacao() {
    switch (typeOper) {
      case "+":
        setNumHandler(num1 + numHandler);
        setNum1(null);
        break;
      case "-":
        setNumHandler(num1 - numHandler);
        setNum1(null);
        break;
      case "×":
        setNumHandler(num1 * numHandler);
        setNum1(null);
        break;
      case "÷":
        if (numHandler == 0) {
          setErrorMessage("Não é possivel dividir por zero");
          return;
        }
        setNumHandler(num1 / numHandler);
        setNum1(null);
        break;
    }
  }
  return (
    <>
      <div>
        <p>{num1}</p>
        {errorMessage != null ? (
          <div>{errorMessage}</div>
        ) : (
          <div>{numHandler == null ? 0 : numHandler}</div>
        )}
        <div>
          <div>
            <button onClick={() => addNumHandler(7)}>7</button>
            <button onClick={() => addNumHandler(8)}>8</button>
            <button onClick={() => addNumHandler(9)}>9</button>
            <button onClick={() => setOperation("÷")}>÷</button>
          </div>
          <div>
            <button onClick={() => addNumHandler(4)}>4</button>
            <button onClick={() => addNumHandler(5)}>5</button>
            <button onClick={() => addNumHandler(6)}>6</button>
            <button onClick={() => setOperation("×")}>×</button>
          </div>
          <div>
            <button onClick={() => addNumHandler(1)}>1</button>
            <button onClick={() => addNumHandler(2)}>2</button>
            <button onClick={() => addNumHandler(3)}>3</button>
            <button onClick={() => setOperation("-")}>-</button>
          </div>
          <div>
            <button onClick={() => addNumHandler(0)}>0</button>
            <button onClick={() => realizarOperacao()}>=</button>
            <button onClick={() => zerarTudo()}>C</button>
            <button onClick={() => setOperation("+")}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
