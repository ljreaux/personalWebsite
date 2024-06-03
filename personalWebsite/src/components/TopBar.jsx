import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import { useState } from "react";
function TopBar() {
  const [hidden, setHidden] = useState(true);
  let menuClass =
    "text-3xl hover:text-accent transition ease-in-out delay-150 justify-center mx-6 ";
  return (
    <>
      <nav className="h-20 fixed top-0 left-0 right-0 z-5">
        <div className="w-screen h-full bg-header flex items-center  justify-center text-4xl text-textColor">
          <div className="flex items-center z-5">
            <TiThMenu
              className={hidden ? menuClass : (menuClass += "rotate-90")}
              onClick={() => setHidden(!hidden)}
            />
            <a
              className="hover:text-accent transition ease-in-out delay-150"
              href="https://drive.google.com/file/d/1PYM-dillFHdcStMO5MukmxGJR9lrch6l/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Larry Reaux
            </a>
          </div>
          <div className="ml-auto mr-0 flex">
            <a
              className="ml-auto mr-0"
              href="https://github.com/ljreaux"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className=" hover:text-accent hover:scale-105 duration-300 mx-0.5 transition ease-in-out delay-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/ljreaux/"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin className=" hover:text-accent hover:scale-105 duration-300 mx-0.5 transition ease-in-out delay-150" />
            </a>
            <a href="larryreaux@gmail.com" target="_blank" rel="noreferrer">
              <CgMail className=" hover:text-accent hover:scale-105 duration-300 mx-0.5 transition ease-in-out delay-150" />
            </a>
          </div>
        </div>
      </nav>
      <div
        className={
          hidden
            ? ` opacity-0`
            : ` fixed top-16 items-center justify-center *:transition-opacity h-66 w-fit bg-header text-textColor text-3xl rounded-lg`
        }
      >
        <nav className="flex flex-col">
          <a className=" hover:text-accent hover:scale-105 duration-300 mt-2 mb-3 mx-8 transition ease-in-out delay-150">
            About Me
          </a>
          <a className=" hover:text-accent hover:scale-105 duration-300 my-3 mx-8 transition ease-in-out delay-150">
            Resume
          </a>
          <a
            href=""
            className=" hover:text-accent hover:scale-105 duration-300 my-3 mx-8 transition ease-in-out delay-150"
          >
            Portfolio
          </a>
          <a
            href=""
            className=" hover:text-accent hover:scale-105 duration-300 my-3 mx-8 transition ease-in-out delay-150"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
export default TopBar;
