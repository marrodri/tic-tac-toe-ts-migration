
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
			<NavBar/>
		</div>
	);
}

function NavBar(){
	return (
		<div>
			<nav>
				<Link to="/game">Game</Link>
				<p>|</p>
				<Link to="/about">About This</Link>
				<p>|</p>
				<Link to="/resources">Resources</Link>
			</nav>
		</div>
	);
}