import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudent() {
  const { dispatch } = useContext(StudentContext);
  const [name, setName] = useState();
  const [level, setLevel] = useState();
  const [date, setDate] = useState();
  const [indexNo, setIndexNo] = useState();
  const [reason, setReason] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDSTUDENT", payload: { name, level, date, indexNo, reason } });
  };
  return (
    <div className="exeat-form"><h1>Sign Exeat</h1>
	<p><small>*Note: All fields are required!</small></p>
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="student name"
        onChange={(e) => setName(e.target.value)}
      required />
      <input
        type="text"
        placeholder="student level"
        onChange={(e) => setLevel(e.target.value)}
      required />
      <input
        type="date"
        placeholder="exeat date"
        onChange={(e) => setDate(e.target.value)}
      required />
      <input
        type="text"
        placeholder="index No"
        onChange={(e) => setIndexNo(e.target.value)}
      required />
	  <textarea
        type="text"
        placeholder="Reason for Exeat"
        onChange={(e) => setReason(e.target.value)} required/>
      <button className="submit-btn">SUBMIT</button>
    </form>
    </div>
  );
}

export default AddStudent;
