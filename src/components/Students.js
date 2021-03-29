import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students, dispatch } = useContext(StudentContext);
  return (
    <div className="stud">
      <h1>Exeat Records Book</h1>
      <hr/>
      {students.map((student) => (
        <div>
          <h2>{student.name}</h2>
          <h3>{student.level}</h3>
          <h3>{student.date}</h3>
          <h3>{student.indexNo}</h3>
          <button
            onClick={() =>
              dispatch({ type: "DELETE", indexNo: student.indexNo })
            }
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Students;
