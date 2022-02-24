import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Clock } from "./components/Clock/Clock";
import { CountDown } from "./components/CountDown/CountDown";
import { Crono } from "./components/Crono/Crono";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar/>
        <main>
        <Routes>
          <Route path="/">
            <Route index element={<Clock />} />
            <Route path="countDown" element={<CountDown/>} />
            <Route path="crono" element={<Crono/>} />
          </Route>
        </Routes>

        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
