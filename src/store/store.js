import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import instructor from "./instructorSlice";
import course from "./courseSlice";
import lectures from "./lecturesList";

export const store = configureStore({
	reducer: {
		auth,
		instructor,
		course,
		lectures,
	},
});
