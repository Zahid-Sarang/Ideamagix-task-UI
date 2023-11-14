import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	lectures: [],
};

export const lecturesSlice = createSlice({
	name: "lectures",
	initialState,
	reducers: {
		setLectures: (state, action) => {
			state.lectures = action.payload;
		},
	},
});

export const { setLectures } = lecturesSlice.actions;
export default lecturesSlice.reducer;
