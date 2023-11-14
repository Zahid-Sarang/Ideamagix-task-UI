import React from "react";
import CourseList from "../components/CourseList";
import LectureLists from "../components/LecturesList";

const HomePage = () => {
	return (
		<div className="pt-10 pb-10 pl-5 pr-5 mx-auto max-w-935">
			<CourseList />
			<LectureLists />
		</div>
	);
};

export default HomePage;
