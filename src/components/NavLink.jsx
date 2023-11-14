import React from "react";
//======================================== React Router Imports========================================//
import { NavLink } from "react-router-dom";
//=====================================================================================================//

const NavBarLink = ({ url, title, Icon }) => {
	return (
		<NavLink
			to={url}
			className={({ isActive, isPending }) =>
				isPending
					? "pending"
					: isActive
					? " text-primary font-black"
					: "text-secondary"
			}
		>
			<span className="flex items-center gap-[0.75rem] p-[0.75rem] text-[0.875rem] md:p-[1.5rem] md:text-[1rem] font-extrabold">
				<span>{Icon}</span>
				<span className="max-xl:hidden">{title}</span>
			</span>
		</NavLink>
	);
};

export default NavBarLink;
