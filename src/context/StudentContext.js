import { createContext, useReducer } from "react";
import studentsReducer from "../reducers/studentsReducer";

const initialState = [
  {
    name: "Ebento Delle",
    level: "200",
    date: "7/10/17",
    indexNo: "KWE004",
	reason: "For money",
  },
  {
    name: "JN Cudjoe",
    level: "100",
    date: "2/11/18",
    indexNo: "KWE005",
	reason: "Sick",
  },
  {
    name: "Mary Donzuo",
    level: "300",
    date: "02/02/19",
    indexNo: "KWE041",
	reason: "for Books",
  },
  {
    name: "William Yaz",
    level: "400",
    date: "15/08/19",
    indexNo: "KWE033",
	reason: "For treatment",
  },
];

export const StudentContext = createContext();
const StudentContextProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentsReducer, initialState);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentContextProvider;
