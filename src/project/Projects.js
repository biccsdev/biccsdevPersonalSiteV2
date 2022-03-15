import "../Home.css";
// import { useState } from "react";
import Sidebar from "../Sidebar";
import Typical from "react-typical";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col h-screen bg-greyish font-vt323">
      <Sidebar />
      <h1 className="text-center text-whitish w-screen my-14 sm:text-6xl lg:text-8xl font-bold">
        <Typical
          steps={["PROJE", 500, "PROJECTS", 5000]}
          loop={2}
          wrapper="a"
        />
      </h1>
      <div class="h-screen flex justify-center bg-amber-50">
        <div class="flex flex-wrap w-1/3 text-whitish justify-center">
          {/* <!-- Title --> */}
          <div class="col-span-full mb-3">
            <p class="text-xl text-whitish ml-2">
              {" "}
              Most recent public projects:{" "}
            </p>
          </div>

          {/* <!-- Card 1 --> */}
          <div class="">
            <a href="http://biccsdev.me/batabit/home.html" data-bs-toggle="tooltip" title="Landing Page made with plain html, css & javascript, it was my first step towards becoming a web developer." target="_blank">
              <img src="https://media3.giphy.com/media/xUA7bfI0PX9wjKTF0k/giphy.gif?cid=ecf05e473rzb31zco8qjw15fl17m383um2h26ognevh62ujh&rid=giphy.gif&ct=g" class="rounded-xl brightness-75" />
            </a>
            <p class="text-xs -translate-y-6 font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              Batabit Landing Page{" "}
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="align-center">
            <a href="http://biccsdev.me/snake/snake.html" data-bs-toggle="tooltip" title="Made this snake game just for fun and to keep practicing. Also plain html, css & js." target="_blank">
              <img
                src="https://media4.giphy.com/media/nnuYT3uWUsPivMkP9h/giphy.gif?cid=ecf05e47zao9p98ftw47yfarhshwfv9n7yyfo5f313qngyl4&rid=giphy.gif&ct=g"
                class="rounded-xl brightness-75"
              />
            </a>
            <p class="text-xs -translate-y-6 font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              Snake Game{" "}
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="">
            <a href="http://biccsdev.me/gbaemulator/index.html" data-bs-toggle="tooltip" title="Fork from repository, implemented start game on cartridge click, UI, and in app games so you don't have to download anything." target="_blank">
              <img
                src="https://media0.giphy.com/media/11a9IZBlusax4k/giphy.gif?cid=ecf05e471a77xgro1yja7dt03jpymrwoayl3c9oarrw4tami&rid=giphy.gif&ct=g"
                class="rounded-xl brightness-75"
              />
            </a>
            <p class="text-xs -translate-y-6 font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              GBA Emulator{" "}
            </p>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="">
            <a href="" data-bs-toggle="tooltip" title="2048 Game, made for stepping up my javascript game as implemented js modules and more advanced logic." target="_blank">
              <img
                src="https://media0.giphy.com/media/Lmg4Qf3FeOBpI6MUnu/giphy.gif?cid=ecf05e47d97wvmapvq8hy62ymczi63zsdbrvrve7uefj3ldo&rid=giphy.gif&ct=g"
                class="rounded-xl brightness-75"
              />
            </a>
            <p class="text-xs -translate-y-6 font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
              {" "}
              2048 Game{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
