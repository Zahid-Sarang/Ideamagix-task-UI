import React from "react";
import Nav from "../components/Nav";

const SideBar = () => {
	return (
		<div
			id="sidebar"
			className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0"
		>
			<div
				id="sidebar__inner"
				className="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-sidebar-bg shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700"
			>
				{/* Navigation */}
				<Nav />
			</div>
		</div>
	);
};

export default SideBar;
