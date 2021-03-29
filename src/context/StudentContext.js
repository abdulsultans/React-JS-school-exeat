import { createContext, useReducer } from "react";
import studentsReducer from "../reducers/studentsReducer";

const initialState = [
  { name: "John Carter", level: "200", date: "12/12/12", indexNo: "KWE004" },
  {
    name: "Jeezy Blankson",
    level: "100",
    date: "12/11/2020",
    indexNo: "KWE005",
  },
  { name: "Mary Hudson", level: "400", date: "02/02/21", indexNo: "KWE001" },
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
