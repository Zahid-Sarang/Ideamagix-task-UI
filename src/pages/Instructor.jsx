import React, { useEffect } from "react";
import { instructorList } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setInstructor } from "../store/instructorSlice";
import Card from "../components/InstructorCard";
const Instructor = () => {
	const dispatch = useDispatch();
	const instructorData = useSelector((state) => state.instructor.instructor);

	useEffect(() => {
		async function userList() {
			try {
				const { data } = await instructorList();
				dispatch(setInstructor(data));
			} catch (err) {
				console.log(err);
			}
		}
		userList();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center  mx-[15px]">
			<h1 className="my-10 text-xl font-bold">Instructor List</h1>
			<div className="flex w-[1200px] flex-wrap gap-5 ml-auto 3xl:ml-0">
				{instructorData.map((ins) => (
					<Card
						id={ins._id}
						userName={ins.userName}
						email={ins.email}
						role={ins.role}
					/>
				))}
			</div>
		</div>
	);
};

export default Instructor;
