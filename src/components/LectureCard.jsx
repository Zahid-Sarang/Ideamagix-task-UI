import React from "react";

const LectureCard = ({
	name,
	level,
	description,
	image,
	id,
	title,
	userName,
	email,
	role,
}) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-lg w-500 max-w-90 min-h-300 p-30">
			{image && (
				<img
					className="object-cover w-full h-48"
					src={image}
					alt={`Course: ${name}`}
				/>
			)}
			<div className="p-4 bg-sidebar-bg">
				<h2 className="mb-2 text-xl font-bold">Course:{name}</h2>
				<p className="mb-2 text-white">Level: {level}</p>
				<p className="mb-4 text-white">{description}</p>
				<p className="mb-4 text-white">Instructor Name: {userName}</p>
				<p className="mb-4 text-white">Email: {email}</p>

				{id && <p className="text-gray-600">ID: {id}</p>}
			</div>
		</div>
	);
};

export default LectureCard;
