import { configureStore } from '@reduxjs/toolkit'
import user from "./actions"
import React from "react";
import ReactDOM from "react-dom";
export default configureStore({
  reducer: {user},
})