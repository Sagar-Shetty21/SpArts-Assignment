import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [navActive, setNavActive] = useState(false);
  
  return (
    <div className="flex bg-slate-100 max-h-screen">
      <Sidebar active={navActive} setActive={setNavActive}/>
      <Main setActive={setNavActive}/>
    </div>
  );
}

export default App;
