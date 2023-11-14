import React, { useEffect } from "react";
import { courseList } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../store/courseSlice";
import CourseCard from "./CourseCard";
const CourseList = () => {
	const dispatch = useDispatch();
	const courseData = useSelector((state) => state.course.course);

	useEffect(() => {
		async function userList() {
			try {
				const { data } = await courseList();
				dispatch(setCourse(data));
			} catch (err) {
				console.log(err);
			}
		}
		userList();
	}, []);
	console.log(courseData);
	return (
		<div className="flex flex-col items-center justify-center  mx-[15px]">
			<h1 className="my-10 text-xl font-bold">Course List</h1>
			<div className="flex w-[1200px] flex-wrap gap-5 ml-auto 3xl:ml-0">
				{courseData.map((item) => (
					<CourseCard
						id={item._id}
						name={item.name}
						description={item.description}
						image={item.image}
						lectures={item.lectures}
						level={item.level}
					/>
				))}
			</div>
		</div>
	);
};

export default CourseList;
