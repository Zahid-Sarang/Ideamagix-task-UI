import React from "react";

const Card = ({ title, userName, email, role, id }) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg w-500 max-w-90 min-h-300 p-30">
			<div className="p-8 rounded-lg shadow-md w-96 bg-sidebar-bg">
				{title && (
					<h1 className="mb-4 font-bold text-white text-22">{title}</h1>
				)}
				{userName && (
					<p className="mb-2 text-white text-16">User Name: {userName}</p>
				)}
				{email && <p className="mb-2 text-white text-16">Email: {email}</p>}
				{role && <p className="mb-2 text-white text-16">Role: {role}</p>}
				{id && <p className="mb-2 text-white text-16">ID: {id}</p>}
			</div>
		</div>
	);
};

export default Card;
