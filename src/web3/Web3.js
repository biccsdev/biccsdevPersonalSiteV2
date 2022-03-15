import "../Home.css";
// import { useState } from "react";
import Sidebar from "../Sidebar";
import Typical from "react-typical";

const Web3Page = () => {
  return (
    <div className="flex flex-wrap bg-greyish font-vt323">
      <Sidebar />
      <h1 className="text-center text-whitish w-screen my-14 sm:text-6xl lg:text-8xl font-bold">
        <Typical steps={["WE", 500, "WEB 3", 5000]} loop={2} wrapper="a" />
      </h1>
      <div class="flex items-center justify-center w-full">
        {/* <!-- Card --> */}
        <a
          class="border-4 border-blackish hover:bg-gray-700 delay-50 duration-100 bg-greenish text-purple p-5 rounded-lg w-60 group hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href=""
        >
          {/* <!-- Image Cover --> */}
          <img
            src="https://media2.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e4725divd6v2c4xslgvw7s6fr2a4cgn5il2tbvqy7vw&rid=giphy.gif&ct=g"
            class="w-full rounded shadow"
          />

          {/* <!-- Title --> */}
          <h3 class="text-gray-200 font-bold mt-5"> Coming soon...</h3>

          {/* <!-- Description --> */}
          <p class="text-gray-400 font-bold mt-2 text-xs">
            {" "}
            You'll be prompted with NFT's, DEFI, DAO's content soon...
          </p>
        </a>
      </div>
    </div>
  );
};

export default Web3Page;
