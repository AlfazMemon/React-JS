import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS
} from "../actionTypes";

const initialState = {
  students: [],
  loading: false,
  error: null
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload
      };

    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: [
          ...state.students,
          action.payload
        ]
      };

    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? action.payload
            : student
        )
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export default studentReducer;