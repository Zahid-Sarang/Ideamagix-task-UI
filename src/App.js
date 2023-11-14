import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRedirect } from "./protectedRoutes/protectedRoutes";
import RegisterPages from "./pages/RegisterPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes for authenticated users */}

				{/* <Route element={<Layout />}>
					<Route path="/" element={<Navigate to="/home" replace />}></Route>
					<Route path="/home" element={<ProtectedRoute component={Home} />} /> */}
				{/* <Route
						path="/profile"
						element={<ProtectedRoute component={ProfilePage} />}
					/> */}
				{/* </Route> */}

				{/* routes for unauthenticated users */}
				{/* <Route path="/signin" element={<AuthRedirect component={SignIn} />} /> */}
				<Route
					path="/signup"
					element={<AuthRedirect component={RegisterPages} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
