import { Outlet } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import { useEffect } from "react";
import { fetchTodos } from "./store/todosSlice";
import { useAppDispatch } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
