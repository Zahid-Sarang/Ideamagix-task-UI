import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
	headers: {
		"Content-type": "application/json",
		Accept: "application/json",
	},
});

/*
|--------------------------------------------|
| Api Enpoints   
|--------------------------------------------|
|
*/
export const registerUser = (data) => api.post("/api/auth/register", data);
export const loginUser = (data) => api.post("/api/auth/login", data);
export const instructorList = () => api.get("/api/auth/getUsers");
export const addLecture = (data) => api.post("/api/lectures", data);
export const lectureListapi = () => api.get("/api/lectures");
export const courseList = () => api.get("/api/courses");
export const createCourse = (data) =>
	api.post("/api/courses", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/refresh`, {
					withCredentials: true,
				});
				return api.request(originalRequest);
			} catch (error) {
				console.log("interceptors error");
				console.log(error);
			}
		}
		throw error;
	}
);

export default api;
