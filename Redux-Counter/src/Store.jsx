import { legacy_createStore } from "@reduxjs/toolkit";
import Reducer from "../Reducer";

 export const store = legacy_createStore(Reducer)