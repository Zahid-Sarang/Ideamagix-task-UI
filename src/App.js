import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	AuthRedirect,
	ProtectedRoute,
} from "./protectedRoutes/protectedRoutes";
import RegisterPages from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefreshToken";
import Instructor from "./pages/Instructor";
import CreateCourse from "./pages/CreateCourse";
import AddLecture from "./pages/AddLecture";
function App() {
	// call refresh endpoint
	const { loading } = useLoadingWithRefresh();
	return loading ? (
		<h1>Loading Please Wait</h1>
	) : (
		<BrowserRouter>
			<Routes>
				{/* Routes for authenticated users */}

				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to="/home" replace />}></Route>
					<Route
						path="/home"
						element={<ProtectedRoute component={HomePage} />}
					/>
					<Route
						path="/instructors"
						element={<ProtectedRoute component={Instructor} />}
					/>
					<Route
						path="/create"
						element={<ProtectedRoute component={CreateCourse} />}
					/>

					<Route
						path="/addLecture"
						element={<ProtectedRoute component={AddLecture} />}
					/>
				</Route>

				{/* routes for unauthenticated users */}
				<Route
					path="/signin"
					element={<AuthRedirect component={LoginPage} />}
				/>
				<Route
					path="/signup"
					element={<AuthRedirect component={RegisterPages} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
