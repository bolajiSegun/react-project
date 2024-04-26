import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Loader from "./Loader";
import { useAuth } from "../ContextAPI/AuthUpdate";
import heroImg from "../assets/hero-img.png";
// import Home from "../pages/Home";
// import Blog from "../pages/Blog";
// import Work from "../pages/Work";

function NavBar() {
  const { token, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [isActive, setIsActive] = useState(location.pathname);

  useEffect(() => {
    setIsActive(location.pathname);
    setLoading(false);
  }, [location.pathname]);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="">
        <ul className="flex justify-end md:visible lg:visible items-center mt-10 text-black font-medium text-xl">
          <ul
            className={` lg:flex md:flex lg:justify-end md:justify-end relative -left-80 transition-all transition-1000 text-center shadow-sm shadow-black lg:shadow-none md:shadow-none w-[100%]  md:left-1 lg:left-1 lg:items-center text-black font-medium text-xl showNavBar ${
              showNav ? "left-10" : "-left-80"
            }`}
          >
            <li className="mr-10 mb-2 lg:mb-0">
              <Link
                to="/"
                className={`${isActive === "/" && "text-[#FF6464]"}`}
              >
                Home
              </Link>
            </li>
            <li className="mr-10 mb-2 lg:mb-0">
              <Link
                to="/Blog"
                className={`${isActive.includes("Blog") && "text-[#FF6464]"}`}
              >
                Blog
              </Link>
            </li>
            <li className="mr-10">
              <Link
                to="/Work"
                className={`${isActive.includes("Work") && "text-[#FF6464]"}`}
              >
                Work
              </Link>
            </li>
            {!user && (
              <div className="flex justify-between items-top">
                <li className="mr-10">
                  <Link
                    to="/Sign-in"
                    className={`${
                      isActive.includes("Sign-in") && "text-[#FF6464]"
                    }`}
                  >
                    Login
                  </Link>
                </li>
                <li className="mr-10">
                  <Link
                    to="/LoginPage"
                    className={`${
                      isActive.includes("LoginPage") && "text-[#FF6464]"
                    }`}
                  >
                    Register Here
                  </Link>
                </li>
              </div>
            )}
            <li className="flex flex-row-reverse justify-center items-center">
              <Link
                to="/LoginPage"
                className={`${
                  isActive.includes("LoginPage") && "text-[#FF6464]"
                }`}
              ></Link>
            </li>
            {user && (
              <div className="flex justify-between items-top">
                <div className="flex flex-col-reverse justify-end items-end mr-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <li>
                    <Link to="/">
                      <img
                        src={user ? user.displayPhoto : heroImg}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                  </li>
                </div>
                <li className="bg-[#FF6464] text-white h-8 rounded-lg px-4 py-1">
                  {user ? user.username : "gfgfhfh"}
                </li>
              </div>
            )}
          </ul>
          <li className="mr-10 visible md:invisible lg:invisible z-10">
            <button onClick={toggleNav} className="text-3xl">
              =
            </button>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
