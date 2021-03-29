import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudent() {
  const { dispatch } = useContext(StudentContext);
  const [name, setName] = useState();
  const [level, setLevel] = useState();
  const [date, setDate] = useState();
  const [indexNo, setIndexNo] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDSTUDENT", payload: { name, level, date, indexNo } });
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="student name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="student level"
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="date"
        pdatelaceholder="exeat date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        pdatelaceholder="indexNo"
        onChange={(e) => setIndexNo(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default AddStudent;
