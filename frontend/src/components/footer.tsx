import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#173513] w-screen h-[600px]">
      <div className="flex gap-10 w-full py-20 relative">
        <div className=" flex flex-col  gap-1">
          <div className="mx-auto text-[#ACB68A] font-meditate xxs:text-6xl lg:text-8xl ml-3">
            Naija Crave
          </div>
          <p className="text-[#ACB68A] text-center">
            Discover, Share, and Create Together
          </p>
          <div className="mx-auto flex gap-5 mt-2">
            <a href="#">
              <img
                src="/svgs/x-social-media-round-icon.svg"
                className="h-6 w-6"
              ></img>
            </a>
            <a href="#">
              <img
                src="/svgs/instagram-svgrepo-com.svg"
                className="h-6 w-6"
              ></img>
            </a>
            <a href="#">
              <img
                src="/svgs/facebook-svgrepo-com.svg"
                className="w-6 h-6"
              ></img>
            </a>
          </div>
        </div>
        <div className="flex gap-20 w-3/5">
          <div className="ml-10 w-3/5">
            <p className="font-semibold text-[#ACB68A] xxs:text-base md: text-xl lg:text-2xl  mb-5">
              Find Your Way
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-300 hover:text-yellow-300"
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-300 hover:text-yellow-300"
                >
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-300 hover:text-yellow-300"
                >
                  Find Recipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-300 hover:text-yellow-300"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-300 hover:text-yellow-300"
                ></NavLink>
              </li>
            </ul>
          </div>
          <div className="mr-5 w-full ">
            <p className="text-[#ACB68A] xxs:text-base md: text-xl lg:text-2xl font-semibold mb-3">
              Subscribe To Our Newsletter
            </p>
            <form className="w-full flex flex-col gap-4 h-full">
              <div>
                <input
                  type="email"
                  name="email"
                  className="p-2 border-yellow-500 border-2 rounded-xl w-full"
                  placeholder="Enter your email"
                ></input>
              </div>
              <button className="bg-yellow-300 text-green-900 rounded-xl w-fit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
