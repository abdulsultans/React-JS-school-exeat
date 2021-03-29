function studentsReducer(state, action) {
  switch (action.type) {
    case "ADDSTUDENT":
      const { name, level, date, indexNo } = action.payload;
      return [{ name, level, date, indexNo, ...state }];
    case "DELETE":
      return state.filter((student) => student.indexNo !== action.indexNo);
    default:
      return state;
  }
}
export default studentsReducer;
