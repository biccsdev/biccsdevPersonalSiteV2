import "../Home.css";
// import { useState } from "react";
import Sidebar from "../Sidebar";
import Typical from "react-typical";
import BlogPost from "./BlogPost";

import MetaPhoto from "../assets/metav.png";
import { useState } from "react";

const BlogsPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-wrap h-screen bg-greyish font-vt323">
      <Sidebar />
      <h1 className="text-center text-whitish w-screen my-14 sm:text-6xl lg:text-8xl font-bold">
        <Typical steps={["BL", 500, "BLOGS", 5000]} loop={2} wrapper="a" />
      </h1>
      <div className="bg-gray-200 flex flex-col gap-4 w-screen h-screen items-center my-6">
        {/* <!-- Card 1 --> */}
        <button
          className="xl:w-fit flex flex-col flex-wrap justify-start sm:w-3/5 rounded bg-blackish shadow p-3 gap-2 hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="#"
          onClick={() => (show ? setShow(false) : setShow(true))}
        >
          {/* <!-- Icon --> */}
          <div className="col-span-12 md:col-span-1 sm:flex sm:w-full sm:justify-center xl:justify-start">
            <img src={MetaPhoto} alt="Guy with VR googles" />
          </div>

          {/* <!-- Title --> */}
          <div className="col-span-11 md:w-full">
            <p className="text-greenish font-bold sm:text-2xl lg:text-5xl xl:text-left md:text-center">
              {" "}
              How to create the metaverse?{" "}
            </p>
          </div>

          {/* <!-- Description --> */}
          <div className="justify-start">
            <p className="text-sm text-whitish font-light sm:text-sm lg:text-3xl">
              Click here to find out about what the metaverse is, current state of
              needed technologies and more!.
            </p>
          </div>
        </button>
        {show ? <BlogPost /> : null}
      </div>
      {/* <BlogPost /> */}
    </div>
  );
};

export default BlogsPage;
