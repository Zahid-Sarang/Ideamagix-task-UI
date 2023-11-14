import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import instructor from "./instructorSlice";
import course from "./courseSlice";

export const store = configureStore({
	reducer: {
		auth,
		instructor,
		course,
	},
});
