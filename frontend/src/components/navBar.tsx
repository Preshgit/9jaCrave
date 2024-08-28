import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="raleway w-[85%] rounded-lg mx-auto p-2 flex items-center  shadow-slate-300 shadow">
      <nav className="flex items-center justify-between w-full">
        <a href="#" className="text-black text-3xl font-meditate font-bold">
          Naija Crave
        </a>
        <ul className="flex gap-10 items-center text-black lato-400">
          <NavLink
            to="#"
            className={({ isActive }) => {
              return isActive
                ? "text-black lato-700 text-sm"
                : "text-black lato-400 text-sm";
            }}
          >
            Explore Dishes
          </NavLink>
          <NavLink
            to="#"
            className={({ isActive }) => {
              return isActive
                ? "text-black lato-700 text-sm"
                : "text-black lato-400 text-sm";
            }}
          >
            Share Recipe
          </NavLink>
          <NavLink
            to="#"
            className={({ isActive }) => {
              return isActive
                ? "text-black lato-700 text-sm"
                : "text-black lato-400 text-sm";
            }}
          >
            About
          </NavLink>
        </ul>
        <div className="flex gap-3 items-center">
          <form className="flex items-center gap-3 relative">
            <input
              type="text"
              placeholder="Search for recipe"
              className="p-2  rounded-lg border relative"
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
            className="bg-black  p-2 text-white hover:text-white rounded-lg"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
