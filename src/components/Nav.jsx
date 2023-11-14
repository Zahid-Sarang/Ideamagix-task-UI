import React from "react";
import { NavLinkProperties } from "../utils/data";
import NavBarLink from "./NavLink";

/* ICON IMPORTS */

const Nav = () => {
	return (
		<nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">
			{NavLinkProperties.map((item) => {
				return (
					<NavBarLink
						id={item.id}
						url={item.url}
						title={item.title}
						Icon={item.icon}
					/>
				);
			})}
		</nav>
	);
};

export default Nav;
