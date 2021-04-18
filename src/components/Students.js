import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students, dispatch } = useContext(StudentContext);
  return (
    <div className="stud">
      {students.map((student) => (
        <div className="card">
          <h2>{student.name}</h2>
          <h3>{student.level}</h3>
          <h3>{student.date}</h3>
          <h3>{student.indexNo}</h3>
		  <h3>{student.reason}</h3>
          <button
            onClick={() =>
              dispatch({ type: "DELETE", indexNo: student.indexNo })
            }
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Students;
