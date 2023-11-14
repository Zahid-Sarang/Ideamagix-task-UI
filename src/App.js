import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	AuthRedirect,
	ProtectedRoute,
} from "./protectedRoutes/protectedRoutes";
import RegisterPages from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes for authenticated users */}

				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to="/home" replace />}></Route>
					<Route
						path="/home"
						element={<ProtectedRoute component={HomePage} />}
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
