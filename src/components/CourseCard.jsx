import React from "react";

const CourseCard = ({ name, level, description, image, id, lectures }) => {
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
				<h2 className="mb-2 text-xl font-bold">{name}</h2>
				<p className="mb-2 text-white">Level: {level}</p>
				<p className="mb-4 text-white">{description}</p>
				{lectures && lectures.length > 0 && (
					<div>
						<p className="mb-2 font-semibold text-gray-600">Lectures:</p>
						<ul className="pl-6 list-disc">
							{lectures.map((lecture, index) => (
								<li key={index} className="text-white">
									{lecture}
								</li>
							))}
						</ul>
					</div>
				)}
				{id && <p className="text-gray-600">ID: {id}</p>}
			</div>
		</div>
	);
};

export default CourseCard;
