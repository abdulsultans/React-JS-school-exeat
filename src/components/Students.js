import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students, dispatch } = useContext(StudentContext);
  return (
    <div>
      {students.map((student) => (
        <div>
          <h2>{student.name}</h2>
          <h3>{student.level}</h3>
          <h3>{student.date}</h3>
          <button
            onClick={() =>
              dispatch({ type: "DELETE", indexNo: student.indexNo })
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Students;
