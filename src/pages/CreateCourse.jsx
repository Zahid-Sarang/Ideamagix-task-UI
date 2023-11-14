import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createCourse } from "../api";

const CreateCourseForm = () => {
	const [courseData, setCourseData] = useState({
		name: "",
		level: "",
		description: "",
		image: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCourseData({
			...courseData,
			[name]: value,
		});
	};

	const handleImageChange = (e) => {
		setCourseData({
			...courseData,
			image: e.target.files[0],
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", courseData.name);
		formData.append("level", courseData.level);
		formData.append("description", courseData.description);
		formData.append("image", courseData.image);

		try {
			const response = await createCourse(formData);
			console.log(response.data);

			// Handle successful creation (redirect, show success message, etc.)
			toast.success("Course created successfully!");
		} catch (error) {
			// Handle error (show error message, log, etc.)
			toast.error("Error creating course:", error.message);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<form
				className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
				onSubmit={handleSubmit}
			>
				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-gray-700"
						htmlFor="name"
					>
						Course Name
					</label>
					<input
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Enter course name"
						name="name"
						value={courseData.name}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-gray-700"
						htmlFor="level"
					>
						Level
					</label>
					<input
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="level"
						type="text"
						placeholder="Enter course level"
						name="level"
						value={courseData.level}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-gray-700"
						htmlFor="description"
					>
						Description
					</label>
					<textarea
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="description"
						rows={3}
						placeholder="Enter course description"
						name="description"
						value={courseData.description}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-gray-700"
						htmlFor="image"
					>
						Image
					</label>
					<input
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="image"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						required
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Create Course
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateCourseForm;
