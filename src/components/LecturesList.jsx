import React, { useEffect } from "react";
import { lectureListapi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setLectures } from "../store/lecturesList";
import LectureCard from "./LectureCard";

const LectureLists = () => {
	const dispatch = useDispatch();
	const lectureData = useSelector((state) => state.lectures.lectures);

	useEffect(() => {
		async function userList() {
			try {
				const response = await lectureListapi();
				dispatch(setLectures(response.data));
			} catch (err) {
				console.log(err);
			}
		}
		userList();
	}, []);
	console.log(lectureData);
	return (
		<div className="flex flex-col items-center justify-center  mx-[15px]">
			<h1 className="my-10 text-xl font-bold">Lecture List</h1>
			<div className="flex w-[1200px] flex-wrap gap-5 ml-auto 3xl:ml-0">
				{lectureData.map((item) => (
					<LectureCard
						id={item._id}
						userName={item.instructor.userName}
						email={item.instructor.email}
						role={item.instructor.role}
						level={item.course.level}
						name={item.course.name}
						image={item.course.image}
					/>
				))}
			</div>
		</div>
	);
};

export default LectureLists;
