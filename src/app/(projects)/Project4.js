import "../fonts/fonts.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Project4() {
  return (
    <div>
      <h2 className="text-4xl text-gray-200 text-left ml-4 mt-4 ">
        <span className="text-blue-600 fonts2 font-normal">Two Good</span>{" "}
        <br /> <span className=" text-2xl">(Clone)</span>
      </h2>
      <p className="text-gray-400 text-left leading-7 ml-3 w-96 mt-4">
        I have Completed this project to understand and learn frontend
        development. I have used Html, Css and JS for the Frontend.
      </p>
      <Link
        className="flex justify-center items-center w-10 h-10 m-3 ml-4"
        href="https://github.com/ajaysathvik/Two-good-clone"
      >
        <FaGithub className="text-6xl text-gray-200" />
      </Link>
    </div>
  );
}
