import React from "react";
import { GiTicTacToe } from "react-icons/gi";


const Navbar = () => {
  return (
<nav className="flex items-center justify-between flex-wrap bg-slate-900 p-4">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <GiTicTacToe className="w-10 h-10 mr-2"/>
    <span className="font-semibold text-xl tracking-tight">Tic Tac Toe</span>
  </div>
</nav>
  );
}

export default Navbar;