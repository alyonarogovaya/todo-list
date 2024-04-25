import { Outlet } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
}

export default App;
