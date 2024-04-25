import { Outlet } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Tabs />
        <Outlet />
      </main>
    </>
  );
}

export default App;
