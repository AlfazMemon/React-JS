import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from "../actionTypes";

export const fetchStudents = () => {

  return async (dispatch) => {

    dispatch({
      type: FETCH_STUDENTS_REQUEST
    });

    try {

      const response = await fetch(
        "http://localhost:3000/students"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();

      dispatch({
        type: FETCH_STUDENTS_SUCCESS,
        payload: data
      });

    } catch (error) {

      dispatch({
        type: FETCH_STUDENTS_FAILURE,
        payload: error.message
      });

    }
  };
};