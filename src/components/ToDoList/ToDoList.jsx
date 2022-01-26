import Form from "../Form/Form";
import { useState } from "react";
import s from "./ToDoList.module.css";

let arrToDo = ["todo1", "todo2"];
let arrinProgress = [];
let done = [];

function ToDo() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };
  const onAdd = () => {
    arrToDo.push(value);
    setValue("");
  };

  const onAddToProgress = (item) => {
    const idx = arrToDo.indexOf(item);
    arrinProgress.push({ todo: item, timer: new Date().getTime() });
    arrToDo.splice(idx, 1);
    setLoading(!loading);
  };

  const onDone = (item) => {
    const idx = arrinProgress.indexOf(item);
    done.push({ ...arrinProgress[idx], time: new Date().getTime() });
    arrinProgress.splice(idx, 1);
    setLoading(!loading);
  };
  return (
    <>
      <Form onChange={onChange} onAdd={onAdd} value={value} />
      <div className={s.container}>
        <div className={s.box}>
          <h2>To Do</h2>
          <ul>
            {arrToDo.map((item) => (
              <li key={item}>
                <p>{item}</p>

                <button type="button" onClick={() => onAddToProgress(item)}>
                  Start
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.box}>
          <h2>In Progress</h2>
          <ul>
            {" "}
            {arrinProgress.map((item) => (
              <li key={item.todo}>
                <p>{item.todo}</p>
                <p> - {new Date(item.timer).toLocaleTimeString()}</p>
                <button type="button" onClick={() => onDone(item)}>
                  Resolve
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.box}>
          <h2>Done</h2>
          <ul>
            {" "}
            {done.map((item) => (
              <li key={item.todo}>
                <p>{item.todo} </p>
                <p>
                  {" "}
                  - {(((item.time - item.timer) / 3600000) * 15).toFixed(2)}$
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDo;
