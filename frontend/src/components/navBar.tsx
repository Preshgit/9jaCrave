import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <header className="raleway w-[85%] rounded-lg mx-auto p-2 flex items-center  bg-white shadow-slate-300 shadow">
      <nav className="flex items-center justify-between w-full bg-white">
        <NavLink to="/" className="text-black text-3xl font-meditate font-bold">
          Naija Crave
        </NavLink>
        <ul className="flex gap-10 items-center text-black lato-400">
          <NavLink
            to="#"
            className={({ isActive }: { isActive: boolean }) => {
              return isActive
                ? "text-black lato-700 text-sm hover:text-gray-600"
                : "text-black lato-400 text-sm hover:text-gray-600";
            }}
          >
            Explore Dishes
          </NavLink>
          <NavLink
            to="/share-recipe"
            className={({ isActive }) => {
              return isActive
                ? "text-black lato-700 text-sm hover:text-gray-500 duration-200 transition-colors"
                : "text-black lato-400 text-sm hover:text-gray-500 duration-200 transition-colors";
            }}
          >
            Share Recipe
          </NavLink>
          <NavHashLink
            smooth
            to="/#about"
            className={({ isActive }: { isActive: boolean }) => {
              return isActive
                ? "text-black lato-700 text-sm hover:text-gray-500 duration-200 transition-colors"
                : "text-black lato-400 text-sm hover:text-gray-500 duration-200 transition-colors";
            }}
            // activeStyle="text-black lato-700 text-sm"
          >
            About
          </NavHashLink>
        </ul>
        <div className="flex gap-3 items-center">
          <form className="flex items-center gap-3 relative">
            <input
              type="text"
              placeholder="Search for recipe"
              className="p-2  rounded-lg border relative bg-white"
            />
            <button className="bg-transparent absolute right-0 border-none hover:border-none">
              <img
                src="src/assets/svg/search-lg.svg"
                className="h-5 w-5 bg-transparent"
              ></img>
            </button>
          </form>
          <NavLink
            to="/login"
            className="bg-[#173513]  p-2 text-white hover:text-white rounded-lg"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
