import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS
} from "../actionTypes";

const API_URL = "http://localhost:3000/students";

// FETCH STUDENTS
export const fetchStudents = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_STUDENTS_REQUEST
    });

    try {
      const response = await fetch(API_URL);

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


// ADD STUDENT
export const addStudent = (student) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const data = await response.json();

      dispatch({
        type: ADD_STUDENT_SUCCESS,
        payload: data
      });

      return true;

    } catch (error) {
      console.error("Add Student Error:", error);
      return false;
    }
  };
};


// UPDATE STUDENT
export const updateStudent = (student) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${API_URL}/${student.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      const data = await response.json();

      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
        payload: data
      });

      return true;

    } catch (error) {
      console.error("Update Student Error:", error);
      return false;
    }
  };
};


// DELETE STUDENT
export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      dispatch({
        type: DELETE_STUDENT_SUCCESS,
        payload: id
      });

      return true;

    } catch (error) {
      console.error("Delete Student Error:", error);
      return false;
    }
  };
};