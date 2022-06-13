
import { NavLink } from "react-router-dom";

export default function Header(){
	return (
		// why the brackets for the tailwindCSS?
		<div className="bg-sky-300 flex flex-col justify-start items-center mb-[80px]">
			<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white text-center">
				Tic Tac Toe
			</h1>
			<h2 className="font-medium leading-tight text-[20px] mt-0 mb-2 text-white text-center">
				Please click on Game to start a game
			</h2>
			<NavBar/>
		</div>
	);
}

function NavBar(){

	const isSelected = "text-2xl text-[#f5ec42]"
	const isUnselected = "text-2xl text-white"
	return (
		<div className="border-b-2 border-black pb-2 inline-flex justify-center w-full">
			<nav className="mx-auto flex flex-row items-center space-x-4">
				<NavLink className={({isActive})=>isActive? isSelected :isUnselected} to="/game">Game</NavLink>
				<p>|</p>
				<NavLink className={({isActive})=>isActive? isSelected :isUnselected} to="/about">About This</NavLink>
				<p>|</p>
				<NavLink className={({isActive})=>isActive? isSelected :isUnselected} to="/resources">Resources</NavLink>
			</nav>
		</div>
	);
}