import React from "react";
import { setAuth } from "../store/authSlice";
/* REACT ROUTER IMPORT */
import { Link } from "react-router-dom";

/* API IMPORTS */
import { registerUser } from "../api";

/* LIBRARIES IMPORTS */
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
/*COMPONENT */
const SignUp = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Register user
	async function onSubmitFormData(userdata) {
		try {
			const { userName, email, password } = userdata;
			const { data } = await registerUser({ userName, email, password });
			dispatch(setAuth(data));
			reset();
			toast.success("Registration Successful!");
		} catch (err) {
			console.log(err);
		}
	}

	// handle Error and Data
	const customSubmitHandler = async (e) => {
		console.log("submit");
		e.preventDefault();
		const isFormValid = await handleSubmit(onSubmitFormData)(e);
		if (!isFormValid) {
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
				className="p-8 rounded-lg shadow-md bg-sidebar-bg w-96 "
			>
				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="userName"
					>
						User Name
					</label>
					<input
						{...register("userName", { required: "User Name is required!" })}
						className="w-full h-10 px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="userName"
						type="text"
						name="userName"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="email"
					>
						Email
					</label>
					<input
						{...register("email", { required: "Email is required!" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="password"
					>
						Password
					</label>
					<input
						{...register("password", {
							required: "Password is required!",
							pattern: {
								value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
								message: "password must be at least 8 characters long!",
							},
						})}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="confirmPassword"
					>
						Confirm Password
					</label>
					<input
						{...register("confirmPassword", {
							required: "Please Enter confirm password!",
							validate: (value, formValues) =>
								value === formValues.password || "Password Not Match!",
						})}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="confirmPassword"
						type="password"
						name="confirmPassword"
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold rounded bg-secondary-btn hover:bg-primary-btn text-primary-btn hover:text-secondary-btn focus:outline-none focus:shadow-outline"
						type="submit"
					>
						SignUp
					</button>
					<Link to="/signin" className="text-sm text-secondary-btn">
						Already Have Account? SignIn
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
