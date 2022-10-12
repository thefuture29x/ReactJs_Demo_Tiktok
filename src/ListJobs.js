import { useState, useEffect } from "react";

function ListJobs() {
  const idRender = JSON.parse(localStorage.getItem("idRender"));
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));

  const [jobs, setJobs] = useState(storageJobs ?? []);
  const [job, setJob] = useState({});
  const [checked, setChecked] = useState([]);

  const showJob = () => {
    console.log(jobs);
    console.log(idRender);
    console.log(checked);
  };

  const handleChangeValue = (e) => {
    setJob({ name: e });
  };

  const setJobBeforeSaveToJobs = () => {
    const newId = idRender + 1;
    localStorage.setItem("idRender", JSON.stringify(newId));
    setJob({});
    return {
      ...job,
      id: newId,
    };
  };
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, setJobBeforeSaveToJobs()];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
  };

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleDeleteJob = () => {
    const newJobs = jobs.filter((item) => !checked.includes(item.id));
    localStorage.setItem("jobs", JSON.stringify(newJobs));
    setJobs(newJobs);
    setChecked([]);
  };

  return (
    <div>
      <input
        value={job.name ?? ""}
        onChange={(e) => handleChangeValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((data) => {
          return (
            <li key={data.id}>
              <a>{data.name}</a>
              <input
                type="checkbox"
                checked={checked.includes(data.id)}
                onChange={() => handleChecked(data.id)}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleDeleteJob()}>Delete</button>
      <button onClick={showJob}>showJob</button>
    </div>
  );
}

export default ListJobs;
