import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

export const NavLinkProperties = [
	{
		id: 1,
		url: "/home",
		title: "Courses",
		icon: <HomeRoundedIcon style={{ fontSize: "1.75rem" }} />,
	},

	{
		id: 2,
		url: "/create",
		title: "Add Course",
		icon: <AddCircleOutlineRoundedIcon style={{ fontSize: "1.75rem" }} />,
	},
	{
		id: 3,
		url: "/addLecture",
		title: "Add Lecture",
		icon: <ExploreRoundedIcon style={{ fontSize: "1.75rem" }} />,
	},
	{
		id: 3,
		url: "/instructors",
		title: "Instructors",
		icon: <PermIdentityRoundedIcon style={{ fontSize: "1.75rem" }} />,
	},
];
