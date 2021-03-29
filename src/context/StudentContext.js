import { createContext, useReducer } from "react";
import studentsReducer from "../reducers/studentsReducer";

const initialState = [
  {
    name: "Ebenezer Delle",
    level: "200",
    date: "7/10/17",
    indexNo: "KWE004",
  },
  {
    name: "Joyceline Cudjoe",
    level: "100",
    date: "2/11/18",
    indexNo: "KWE005",
  },
  {
    name: "Sultan Femi",
    level: "400",
    date: "22/12/20",
    indexNo: "KWE001",
  },
  {
    name: "Mary Donzuo",
    level: "300",
    date: "02/02/19",
    indexNo: "KWE041",
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
