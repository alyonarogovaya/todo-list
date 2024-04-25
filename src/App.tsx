import { Outlet } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <TodoForm />
          <Tabs />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
