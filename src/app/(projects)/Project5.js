import "../fonts/fonts.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Project5() {
  return (
    <div>
      <h2 className="text-4xl text-gray-200 text-left ml-4 mt-4 ">
        <span className="text-blue-600 fonts2 font-normal">
          Dashboard System
        </span>{" "}
        <br /> <span className=" text-2xl">(Clone)</span>
      </h2>
      <p className="text-gray-400 text-left leading-7 ml-3 w-96 mt-4">
        I have Completed this project to understand and learn Next.js. I have
        used Next.js, Tailwind CSS and TS for the Frontend and mySQL for the
        database. I have also used Prisma for the integration of the database
        with the frontend and hosted the database in Vercel.
      </p>
      <Link
        className="flex justify-center items-center w-10 h-10 m-3 ml-4"
        href="https://github.com/ajaysathvik/dashboard-nextjs"
      >
        <FaGithub className="text-6xl text-gray-200" />
      </Link>
    </div>
  );
}
