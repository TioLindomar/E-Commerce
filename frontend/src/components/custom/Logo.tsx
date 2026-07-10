import { Link } from "react-router";

export default function Logo() {
	return (
		<Link to={"/home"} className="font-black hover:cursor-pointer text-lg">
			Logo
		</Link>
	);
}
