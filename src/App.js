import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#16144e";
      showAlert("Dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enable", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextNotes" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm  title="Enter the text to anolyze below" showAlert={showAlert} mode={mode}/> */}
      <>
        <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<TextForm  title="Enter the text to anolyze below" showAlert={showAlert} mode={mode}/> } />
            <Route path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
