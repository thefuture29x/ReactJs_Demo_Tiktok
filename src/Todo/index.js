import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./action";
import logger from "./logger";

function ToDoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Todo</h2>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={() => handleSubmit()}>Add</button>
      <div>
        <ul>
          {jobs.map((data, index) => (
            <li key={index}>
              {data}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
