import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	instructor: [],
};

export const instructorSlice = createSlice({
	name: "instructor",
	initialState,
	reducers: {
		setInstructor: (state, action) => {
			state.instructor = action.payload;
		},
	},
});

export const { setInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
