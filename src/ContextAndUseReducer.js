import { useStore, actions } from "./store";

function ContextAndUseReducer() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  return (
    <div className="App">
      <h1>Ahihihi</h1>
      <input
        value={todoInput}
        placeholder="Enter todo ... "
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
    </div>
  );
}

export default ContextAndUseReducer;
