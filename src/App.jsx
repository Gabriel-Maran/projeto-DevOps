import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(null);
  const [typeOper, setTypeOper] = useState("+");
  const [errorMessage, setErrorMessage] = useState(null);
  const [numHandler, setNumHandler] = useState(null);

  function addNumHandler(num) {
    if (errorMessage != null) zerarTudo();
    setNumHandler(numHandler * 10 + num);
  }

  function calcula() {
    if (num1 === null || numHandler === null) return num1 ?? numHandler;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(numHandler);

    switch (typeOper) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "×":
        return n1 * n2;
      case "÷":
        return n2 === 0 ? "DivZero" : n1 / n2;
    }
  }

  function realizarOperacao() {
    var resultado = calcula();
    if (resultado === "DivZero") {
      setErrorMessage("Não é possível dividir por zero");
      zerarTudo();
    } else {
      setNum1(null);
      setNumHandler(resultado);
    }
  }

  function setOperation(oper) {
    if (num1 === null) {
      setNum1(numHandler);
      setNumHandler(null);
    } else if (numHandler !== null) {
      const resultado = calcula();
      if (resultado === "DivZero") {
        setErrorMessage("Não é possível dividir por zero");
        zerarTudo();
      } else {
        setNum1(resultado);
        setNumHandler(null);
      }
    }
    setTypeOper(oper);
  }

  function zerarTudo() {
    setNum1(null);
    setTypeOper("+");
    setNumHandler(null);
    setErrorMessage(null);
  }
  return (
    <>
      <div id="mainContent">
        <div id="calculadoraHeader">
          <p>{num1 == null ? <br /> : num1}</p>
          {errorMessage != null ? (
            <div>
              <p>{errorMessage}</p>
            </div>
          ) : (
            <div>
              <p>{numHandler == null ? 0 : numHandler}</p>
            </div>
          )}
        </div>
        <div id="calculadoraMain">
          <div>
            <button className="btn" onClick={() => addNumHandler(7)}>
              7
            </button>
            <button className="btn" onClick={() => addNumHandler(8)}>
              8
            </button>
            <button className="btn" onClick={() => addNumHandler(9)}>
              9
            </button>
            <button className="btn" onClick={() => setOperation("÷")}>
              ÷
            </button>
          </div>
          <div>
            <button className="btn" onClick={() => addNumHandler(4)}>
              4
            </button>
            <button className="btn" onClick={() => addNumHandler(5)}>
              5
            </button>
            <button className="btn" onClick={() => addNumHandler(6)}>
              6
            </button>
            <button className="btn" onClick={() => setOperation("×")}>
              ×
            </button>
          </div>
          <div>
            <button className="btn" onClick={() => addNumHandler(1)}>
              1
            </button>
            <button className="btn" onClick={() => addNumHandler(2)}>
              2
            </button>
            <button className="btn" onClick={() => addNumHandler(3)}>
              3
            </button>
            <button className="btn" onClick={() => setOperation("-")}>
              -
            </button>
          </div>
          <div>
            <button className="btn" onClick={() => addNumHandler(0)}>
              0
            </button>
            <button
              className="btn"
              id="resolver"
              onClick={() => realizarOperacao()}
            >
              =
            </button>
            <button className="btn" id="zerar" onClick={() => zerarTudo()}>
              C
            </button>
            <button className="btn" onClick={() => setOperation("+")}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
