import "./fonts/fonts.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";




export default function Contact() {
  return (
    <div className=" max-w-full bg-gray-700 bg-opacity-10 m-auto min-h-screen ">
      <h2 className="mt-24 text-9xl text-center text-gray-300 pt-56 fonts3 font-extralight">
        Let's Work <br /> Together
      </h2>
      <div className=" justify-center flex flex-row mt-10 gap-5">
        <div className=" w-max p-2 px-4 border text-xl font-extralight m-5 border-gray-600 rounded-3xl text-gray-300">
          ajaysathviksu@mail.com
        </div>
        <div className=" w-max p-2 px-4 border text-xl font-extralight m-5 border-gray-600 rounded-3xl text-gray-300">
          +91 8590 351 989
        </div>
      </div>
      <footer>
        <svg width="2200" height="370">
          <line
            x1="100"
            y1="350"
            x2="2100"
            y2="350"
            stroke="white"
            opacity={0.5}
          />
        </svg>
        <div className="flex flex-row items-center justify-around text-center mt-5 text-gray-300">
          <div className="">
            <FaGithub className="text-3xl" />
          </div>
          <div className="">
            <FaLinkedin className="text-3xl" />
          </div>
          <div className="">
            <SiGmail className="text-3xl" />
          </div>
          <div className="">
            <BsTwitterX className="text-3xl" />
          </div>
        </div>
      </footer>
    </div>
  );
}
