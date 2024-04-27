import { Outlet } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import { useFetchTodosQuery } from "./services/todosApi";
import { useEffect } from "react";
import { setTodos, setIsLoading } from "./store/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Message from "./components/Message/Message";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.todos.isLoading);
  const { data: apiTodos, isFetching, error } = useFetchTodosQuery();

  useEffect(() => {
    if (apiTodos?.record?.todos) {
      dispatch(setTodos(apiTodos.record.todos));
    }
  }, [apiTodos, dispatch]);

  useEffect(() => {
    dispatch(setIsLoading(isFetching));
  }, [isFetching, dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <TodoForm />
          <Tabs />
          {isLoading ? <LoadingSpinner /> : <Outlet />}
          {error && (
            <Message message="An error occured loading data. Try again later" />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
