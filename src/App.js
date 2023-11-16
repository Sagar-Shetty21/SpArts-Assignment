import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-100 max-h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
