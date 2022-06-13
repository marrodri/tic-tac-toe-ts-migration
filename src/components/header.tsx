
import { Link } from "react-router-dom";

export default function Header(){
	return (
		<div>
			<h1>
				Tic Tac Toe
			</h1>
			<h2>
				Please click on Game to start a game
			</h2>
		</div>
	);
}

function NavBar(){
	return (
		<div>
			<nav>
				<Link to="/game"></Link>
				<Link to="/about"></Link>
				<Link to="/resources"></Link>
			</nav>
		</div>
	);
}