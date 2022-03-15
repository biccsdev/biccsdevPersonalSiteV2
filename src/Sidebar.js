import "./Home.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-whitish items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#fffaff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`lg:grid text-whitish z-20 top-0 right-0 w-[35vw] lg:w-[15vw] bg-purple p-10 pl-2.5 fixed h-full ease-in-out duration-300 rounded ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button className="mt-20 text-4xl ml-8 underline"><Link to="/">Home</Link></button>
      <button className="mt-20 text-4xl ml-8 underline"><Link to="/Blogs">Blogs</Link></button>
      <button className="mt-20 text-4xl ml-2 underline"><Link to="/Projects">Projects</Link></button>
      <button className="mt-20 text-4xl ml-8 underline"><Link to="/Web3">Web3</Link></button>
      <a className="mt-20 text-4xl ml-10 underline" href="mailto:biccsdev@gmail.com" target="_blank">Contact</a>
      
      <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
