import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

export function useLoadingWithRefresh() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const refresh = async () => {
			try {
				// Make a refresh request
				const { data } = await axios.post(
					"http://localhost:8005/api/auth/refresh",
					{},
					{
						withCredentials: true,
					}
				);

				// Update the authentication state with the new data
				dispatch(setAuth(data));
			} catch (error) {
				console.error("Error during token refresh:", error);
			} finally {
				setLoading(false);
			}
		};

		refresh();
	}, [dispatch]);

	return { loading };
}
