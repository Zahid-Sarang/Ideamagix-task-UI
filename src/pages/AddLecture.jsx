import React from "react";
/* REACT ROUTER IMPORT */
import { useNavigate } from "react-router-dom";

/* API IMPORTS */

/* LIBRARIES IMPORTS */
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addLecture } from "../api";

/* REDUX & STATE IMPORTS */

/*COMPONENT */
const SignIn = () => {
	const Navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Login user
	async function onSubmitFormData(userdata) {
		try {
			const response = await addLecture(userdata);
			console.log(response.data);

			// Reset the form fields after a successful submission:
			reset();
			// Display success message:
			toast.success("Lecture Added SuccessFully!");
			Navigate("/home");
		} catch (apiError) {
			toast.error(apiError.response.data.errors[0].msg);
			// If the error response has a message, display it. Otherwise, show a generic error.
			console.log(apiError.response.data.errors[0].msg);
			if (
				apiError.response &&
				apiError.response.data &&
				apiError.response.data.message
			) {
				toast.error(apiError.response.data.message);
			} else {
				toast.error("failed to add lecture");
			}
		}
	}

	// HANDLE ERRORS AND DATA
	const customSubmitHandler = async (e) => {
		e.preventDefault();
		// Trigger form validation
		const isFormValid = await handleSubmit(onSubmitFormData)(e);
		if (!isFormValid) {
			// Handle validation errors (i.e., show toast messages)
			for (let error in errors) {
				toast.error(errors[error]?.message);
			}
		}
	};

	return (
		<div className="flex items-center justify-center h-screen mx-[15px]">
			<ToastContainer />
			<form
				noValidate
				onSubmit={customSubmitHandler}
				className="p-8 rounded-lg shadow-md bg-sidebar-bg w-96"
			>
				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="date"
					>
						Date
					</label>
					<input
						{...register("date", { required: "date is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="date"
						type="date"
						name="date"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="date"
					>
						Instructor
					</label>
					<input
						{...register("instructor", {
							required: "instructor ID is required",
						})}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="instructor"
						type="text"
						name="instructor"
						placeholder="please enter Instructor Id"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="date"
					>
						Course
					</label>
					<input
						{...register("course", { required: "course ID is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="course"
						type="text"
						name="course"
						placeholder="Please enter a course Id "
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold rounded bg-secondary-btn hover:bg-primary-btn text-primary-btn hover:text-secondary-btn focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
